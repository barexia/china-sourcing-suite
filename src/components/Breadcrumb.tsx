import JsonLd from "./JsonLd";

const siteUrl = "https://cn101.cn";

interface Crumb {
  name: string;
  url: string;
}

export default function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.name,
            item: `${siteUrl}${item.url}`,
          })),
        }}
      />
      <nav
        aria-label="Breadcrumb"
        className="max-w-3xl mx-auto px-4 pt-8 text-sm text-zinc-500"
      >
        {items.map((item, i) => (
          <span key={item.url}>
            {i > 0 && <span className="mx-2">/</span>}
            {i === items.length - 1 ? (
              <span className="text-zinc-800 font-medium">{item.name}</span>
            ) : (
              <a href={item.url} className="hover:text-zinc-700">
                {item.name}
              </a>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
