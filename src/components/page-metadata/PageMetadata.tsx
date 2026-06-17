import { useEffect } from 'react';

export type PageMetadataConfig = {
  title: string;
  description: string;
  author: string;
  canonicalUrl: string;
  ogUrl: string;
  ogImage: string;
  faviconUrl: string;
  appleTouchIconUrl: string;
};

type MetaAttribute = 'name' | 'property';

function setMeta(attribute: MetaAttribute, key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setLink(rel: string, href: string, type?: string) {
  const selector = `link[rel="${rel}"]`;
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);

  if (type) {
    element.setAttribute('type', type);
  }
}

export function PageMetadata({ metadata }: { metadata: PageMetadataConfig }) {
  useEffect(() => {
    document.title = metadata.title;

    setMeta('name', 'description', metadata.description);
    setMeta('name', 'author', metadata.author);
    setMeta('name', 'robots', 'index, follow');
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', metadata.ogUrl);
    setMeta('property', 'og:title', metadata.title);
    setMeta('property', 'og:description', metadata.description);
    setMeta('property', 'og:image', metadata.ogImage);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', metadata.title);
    setMeta('name', 'twitter:description', metadata.description);
    setMeta('name', 'twitter:image', metadata.ogImage);
    setLink('canonical', metadata.canonicalUrl);
    setLink('shortcut icon', metadata.faviconUrl, 'image/x-icon');
    setLink('apple-touch-icon', metadata.appleTouchIconUrl);
  }, [metadata]);

  return null;
}
