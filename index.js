export default function loadScript(src, { async, defer }) {
  const script = document.createElement('script');
  script.src = src;

  if (async) {
    script.async = true;
  }

  if (defer) {
    script.defer = true;
  }

  return new Promise((resolve, reject) => {
    script.addEventListener('load', resolve);
    script.addEventListener('error', reject);
    document.head.appendChild(script);
  });
}
