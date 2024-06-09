import { content } from "./contents/text";

export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return `${content.domain_image}/${src}`;
}