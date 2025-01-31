import React from 'react';
import Avatar from '../atoms/Avatar';

const UserInfo = () => {
    const contactName = "John Doe";
    const image = "path/to/image.jpg";
    const lastMessage = "Hello, how are you?";

    return (
        <div className={`flex w-full items-center text-start justify-between gap-2 border-t-2 border-gray-200 px-5 bg-white`}>
            <div className="mr-2 flex pt-2">
                <Avatar width="w-12" height="h-12" name={contactName} image={image} />
            </div>
            <div className="flex w-full py-2">
                <div className="flex h-full w-full flex-col">
                    <span className="overflow-y-hidden font-bold text-black">
                        {contactName}
                    </span>
                    <span className="overflow-y-hidden text-ellipsis text-sm text-[#aebac1]">
                        {lastMessage}
                    </span>
                </div>
                <div className="flex w-auto flex-col text-[#aebac1]">
                    <span className="flex h-full cursor-pointer items-center justify-end gap-2">
                        <svg viewBox="0 0 19 20" width="19" height="20" className="">
                            <path
                                fill="currentColor"
                                d="m3.8 6.7 5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z"
                            ></path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;