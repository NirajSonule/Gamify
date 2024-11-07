import { Button } from "./ui/button";

const ButtonComponent = ({ isLoading, className, children }) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      className={
        className ?? "shad-primary-btn w-full text-white rounded-lg shadow-lg"
      }
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <img
            src="/assets/icons/loader.svg"
            alt="loader"
            width={24}
            height={24}
            className="animate-spin"
          />
          Loading...
        </div>
      ) : (
        children
      )}
    </Button>
  );
};

export default ButtonComponent;
