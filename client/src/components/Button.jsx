import { Button } from "./ui/button";
import loader from "../assets/icons/loader.svg";

const ButtonComponent = ({ isLoading, className, children, onClick }) => {
  return (
    <Button
      type="submit"
      disabled={isLoading}
      onClick={onClick}
      className={
        className ?? "shad-primary-btn w-full text-white rounded-lg shadow-lg"
      }
    >
      {isLoading ? (
        <div className="flex items-center gap-4">
          <img
            src={loader}
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
