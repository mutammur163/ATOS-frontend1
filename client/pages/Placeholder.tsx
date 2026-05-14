import Layout from "@/components/Layout";
import { useLocation } from "react-router-dom";

export default function Placeholder() {
  const location = useLocation();
  const pageName = location.pathname.split("/").filter(Boolean)[0] || "page";
  const displayName = pageName.charAt(0).toUpperCase() + pageName.slice(1);

  return (
    <Layout>
      <section className="min-h-96 flex items-center justify-center bg-gray-light">
        <div className="text-center max-w-md">
          <h1 className="font-serif font-bold text-3xl text-gray-dark mb-4">
            {displayName} Coming Soon
          </h1>
          <p className="text-sm text-gray-text mb-6 leading-relaxed">
            This page is under development. Continue prompting to add content and functionality to this section of the site.
          </p>
          <div className="text-xs text-gray-text">
            Route: <code className="bg-white border border-gray-medium px-2 py-1 rounded text-gray-dark font-mono">{location.pathname}</code>
          </div>
        </div>
      </section>
    </Layout>
  );
}
