export const ProjectDetails = ({
  project,
}: {
  project: {
    github?: string;
    shortDesc: string;
    title: string;
    link?: string;
    languages: string;
  };
}) => {
  const { github: gh, link, languages } = project;

  const Github = () => {
    if (!gh) return <></>;
    return (
      <div className="flex gap-x-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
        </svg>
        <a href={`https://github.com/${gh}`}>{gh}</a>
      </div>
    );
  };

  const Link = () => {
    if (!link) return <></>;
    return (
      <div className="flex gap-x-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
          <path d="M11 13l9 -9"></path>
          <path d="M15 4h5v5"></path>
        </svg>
        <a href={link}>{link.replace("https://", "")}</a>
      </div>
    );
  };

  const Languages = () => {
    if (!languages) return <></>;
    return (
      <div className="flex gap-x-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M2 6m0 2a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-16a2 2 0 0 1 -2 -2z"></path>
          <path d="M6 10l0 .01"></path>
          <path d="M10 10l0 .01"></path>
          <path d="M14 10l0 .01"></path>
          <path d="M18 10l0 .01"></path>
          <path d="M6 14l0 .01"></path>
          <path d="M18 14l0 .01"></path>
          <path d="M10 14l4 .01"></path>
        </svg>
        Made using {languages}
      </div>
    );
  };

  return (
    <>
      <Github />
      <Link />
      <Languages />
    </>
  );
};
