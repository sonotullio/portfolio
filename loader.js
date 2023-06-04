// Docs: https://techdocs.akamai.com/ivm/reference/test-images-on-demand
export default function akamaiLoader({ src, width, quality }) {
    return `https://example.com/${src}?imwidth=${width}`;
}