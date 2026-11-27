import fs from 'node:fs';
import path from 'node:path';
import type { PluginOptions } from '@docusaurus/plugin-content-docs';

type SidebarItemsGeneratorOption = PluginOptions['sidebarItemsGenerator'];
type NormalizedSidebarItem = Awaited<
  ReturnType<SidebarItemsGeneratorOption>
>[number];

// Learning Hubs content comes from the `hubs` repository, mounted as a git
// submodule in `learning-hubs/hubs`. Everything specific to that integration
// lives in this file.

export const HUBS_REPO = 'https://github.com/richardborgesdev/hubs';
export const HUBS_DIR = path.resolve(__dirname, 'learning-hubs/hubs');

// Paths are relative to the `learning-hubs` docs folder.
export const LEARNING_HUBS_EXCLUDE = [
  // Docusaurus defaults (setting `exclude` replaces them)
  '**/_*.{js,jsx,ts,tsx,md,mdx}',
  '**/_*/**',
  '**/*.test.{js,jsx,ts,tsx}',
  '**/__tests__/**',
  // Course code and tooling noise
  'hubs/**/node_modules/**',
  'hubs/**/.*/**',
  'hubs/**/ios/**',
  'hubs/**/android/**',
  'hubs/**/AGENTS.md',
  'hubs/**/CLAUDE.md',
  // Default "A new Flutter project" READMEs
  'hubs/mobile/udemy-cod3r-aprenda-flutter-23/{test_drive,coder_expenses,coder_projeto_perguntas,coder_recipes,coder_shop}/README.md',
  // CV drafts still have placeholders ([EMAIL], [URL]...)
  'hubs/career/cv/**',
];

const EXCLUDED_FROM_SITE = [
  /(^|\/)node_modules(\/|$)/,
  /(^|\/)\.[^/]+(\/|$)/,
  /(^|\/)(ios|android)(\/|$)/,
  /(^|\/)(AGENTS|CLAUDE)\.md$/,
  /^mobile\/udemy-cod3r-aprenda-flutter-23\/(test_drive|coder_expenses|coder_projeto_perguntas|coder_recipes|coder_shop)\/README\.md$/,
  /^career\/cv(\/|$)/,
];

const isPublished = (relPath: string) =>
  relPath.endsWith('.md') && !EXCLUDED_FROM_SITE.some(re => re.test(relPath));

type MdNode = { type: string; url?: string; children?: MdNode[] };

/**
 * Relative links in the hubs READMEs are written for GitHub: they point to
 * folders, code files and pages that are not part of the site. Links that
 * resolve to a published page are kept (folders become their README.md);
 * every other relative link is rewritten to the file or folder on GitHub.
 */
export function remarkHubsLinks() {
  return (tree: MdNode, file: { path?: string }) => {
    const source = file.path;
    if (!source || !source.startsWith(HUBS_DIR + path.sep)) return;

    const visit = (node: MdNode) => {
      if (node.type === 'link' && node.url) rewrite(node, source);
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}

function rewrite(node: MdNode, source: string) {
  const url = node.url as string;
  if (/^([a-z][a-z0-9+.-]*:|#|\/)/i.test(url)) return; // absolute, anchor, mailto…

  const [rawPath, hash = ''] = url.split('#');
  if (!rawPath) return;
  const target = path.resolve(path.dirname(source), decodeURI(rawPath));
  const rel = path.relative(HUBS_DIR, target).split(path.sep).join('/');
  if (rel.startsWith('..')) return; // outside the hubs repo
  const anchor = hash ? `#${hash}` : '';

  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
    const readme = path.join(target, 'README.md');
    if (
      fs.existsSync(readme) &&
      isPublished(`${rel ? `${rel}/` : ''}README.md`)
    ) {
      node.url =
        path.relative(path.dirname(source), readme).split(path.sep).join('/') +
        anchor;
      return;
    }
    node.url = `${HUBS_REPO}/tree/main/${rel}${anchor}`;
    return;
  }

  if (fs.existsSync(target) && isPublished(rel)) return;
  node.url = `${HUBS_REPO}/blob/main/${rel}${anchor}`;
}

// Labels for the area folders; course folders use the title of their README.
const AREA_LABELS: Record<string, string> = {
  ai: '🤖 AI',
  algorithms: '🧮 Algorithms',
  architecture: '🏗️ Software Architecture',
  backend: '🖥️ Backend',
  career: '💼 Career',
  cloud: '☁️ Cloud',
  design: '🎨 Design',
  english: '🇺🇸 English',
  finance: '💰 Finance',
  games: '🎮 Game Development',
  library: '📖 Library',
  mobile: '📱 Mobile Development',
  productivity: '⚡ Productivity',
  staff: '👔 Staff Engineering',
  'system-design': '🧩 System Design',
  web: '🌐 Web Development',
};

// "Build Your First Agent in TypeScript | mastra | 2026" → "Build Your First Agent in TypeScript"
const cleanTitle = (title: string) => title.split(' | ')[0].trim();

export const hubsSidebarItemsGenerator: SidebarItemsGeneratorOption = async ({
  defaultSidebarItemsGenerator,
  ...args
}) => {
  const titles = new Map(args.docs.map(doc => [doc.id, doc.title]));
  const relabel = (items: NormalizedSidebarItem[]): NormalizedSidebarItem[] =>
    items.map(item => {
      if (item.type !== 'category') return item;
      const dir = item.label;
      const indexId = item.link?.type === 'doc' ? item.link.id : undefined;
      const area = indexId?.match(/^hubs\/([^/]+)\/README$/)?.[1];
      const label =
        (area && AREA_LABELS[area]) ||
        (indexId &&
          titles.get(indexId) &&
          cleanTitle(titles.get(indexId) as string)) ||
        dir;
      return { ...item, label, collapsed: true, items: relabel(item.items) };
    });
  return relabel(await defaultSidebarItemsGenerator(args));
};

export const learningHubsEditUrl = ({ docPath }: { docPath: string }) =>
  docPath.startsWith('hubs/')
    ? `${HUBS_REPO}/edit/main/${docPath.slice('hubs/'.length)}`
    : `https://github.com/richardborgesdev/portfolio/edit/main/learning-hubs/${docPath}`;
