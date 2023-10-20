interface LogoFooterProps {
  size: string;
}

const LogoFooter = ({ size }: LogoFooterProps) => {
  return (
    <div className="flex items-center gap-x-2">
      {size === "sm" && (
        <>
          <div
            className="
       min-w-[25px] 
       min-h-[25px]
       text-neutral-950
       bg-neutral-950
       rounded-full 
       dark:hidden"
          ></div>

          <div
            className="
       min-w-[25px] 
       min-h-[25px]
       text-white
       bg-white
       rounded-full 
       hidden 
       dark:block"
          ></div>
          <p
            className="text-lg
        font-bold 
        tracking-tighter
         text-neutral-950
         dark:text-white"
          >
            aherman/san
          </p>
        </>
      )}
      {size === "lg" && (
        <>
          <div
            className="
       min-w-[35px] 
       min-h-[35px]
       text-neutral-950
       bg-neutral-950
       rounded-full 
       dark:hidden"
          ></div>

          <div
            className="
       min-w-[35px] 
       min-h-[35px]
       text-white
       bg-white
       rounded-full 
       hidden 
       dark:block"
          ></div>
          <p
            className="text-2xl
        font-bold 
        tracking-tighter
         text-neutral-950
         dark:text-white"
          >
            aherman/san
          </p>
        </>
      )}
    </div>
  );
};

export default LogoFooter;
