import { cn } from "@/app/_lib/utils";

const NavbarPrimaryLinks = (options: {
  currentPage: string;
  isAdmin: boolean;
  linkClassName?: string;
}) => {
  const { currentPage, isAdmin, linkClassName } = options;
  const isActive = (page: string) => {
    return currentPage === page;
  };

  return (
    <>
      <a
        href="/about"
        className={cn(
          "flex h-full items-center px-[15px] text-[16px] font-semibold",
          isActive("about") &&
            "text-sc-sky-darker dark:text-sc-fuchsia-lighter cursor-default",
          !isActive("about") &&
            "text-sc-heritage-blue hover:bg-sc-sky hover:dark:bg-sc-fuchsia cursor-pointer hover:text-white dark:text-white",
          linkClassName && `${linkClassName}`,
        )}
        onClick={(e) => {
          if (isActive("about")) {
            e.preventDefault();
            return;
          }
        }}
      >
        About
      </a>
      <a
        href="/information"
        className={cn(
          "flex h-full items-center px-[15px] text-[16px] font-semibold",
          isActive("information") &&
            "text-sc-sky-darker dark:text-sc-fuchsia-lighter cursor-default",
          !isActive("information") &&
            "text-sc-heritage-blue hover:bg-sc-sky hover:dark:bg-sc-fuchsia cursor-pointer hover:text-white dark:text-white",
          linkClassName && `${linkClassName}`,
        )}
        onClick={(e) => {
          if (isActive("information")) {
            e.preventDefault();
            return;
          }
        }}
      >
        Information
      </a>
    </>
  );
};

export default NavbarPrimaryLinks;
