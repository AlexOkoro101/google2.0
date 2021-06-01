import HeaderOption from "./HeaderOption";
import {
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon,

} from '@heroicons/react/outline'

function HeaderOptions() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b">
            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} title="All" selected></HeaderOption>
                <HeaderOption Icon={PhotographIcon} title="Images" ></HeaderOption>
                <HeaderOption Icon={PlayIcon} title="Videos" ></HeaderOption>
                <HeaderOption Icon={NewspaperIcon} title="News" ></HeaderOption>
                <HeaderOption Icon={MapIcon} title="Maps" ></HeaderOption>
                <HeaderOption Icon={DotsVerticalIcon} title="More" ></HeaderOption>
            </div>
            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
