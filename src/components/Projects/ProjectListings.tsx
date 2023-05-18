import type { Project } from "../../types";

export const ProjectListings = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      {projects.map((p) => {
        return (
          <a
            href={p.url}
            target="_blank"
            className="hover:no-underline"
            key={p.url}
          >
            <div className="h-36 flex flex-col justify-between gap-y-2 border border-neutral-700 bg-themeBlack hover:scale-105 ease-out transition-transform p-4 rounded-xl">
              <div className="flex flex-col gap-y-2">
                <span className="text-xl font-medium">
                  {p.frontmatter.title}
                </span>
                <p className="text-(sm neutral-200)">
                  {p.frontmatter.shortDesc}
                </p>
              </div>
              <div className="flex items-center gap-x-2 text-(sm neutral-200)">
                <div className="text-sm">{p.frontmatter.languages}</div>
                <span>•</span>

                <div className="text-sm">
                  {p.frontmatter.github ? "Open source" : "Closed source"}
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
};
