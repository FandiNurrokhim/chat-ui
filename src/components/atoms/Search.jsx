export default function Search() {

    return (
        <div className="flex w-full rounded-lg">
        <div className="relative h-max w-full">
          <div className="absolute h-full w-9 pl-3 text-[#939393]">
            <svg
              viewBox="0 0 24 15"
              width="30"
              height="30"
              className="left-[60%] right-[10%] h-full"
            >
              <path
                fill="currentColor"
                d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z"
              ></path>
            </svg>
          </div>
          <div className="pt-3">
            <input
              className="h-11 w-full rounded-lg bg-[#F5F5F5] pl-14 text-sm text-black outline-none"
              placeholder="Search"
            />
          </div>
        </div>
        </div>
    );
  }
  