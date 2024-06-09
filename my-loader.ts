import { websiteConfig } from "./websiteConfig";

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return `${websiteConfig.domain_image}/${src}`;
}