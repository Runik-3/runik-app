import MainLogo from '../components/MainLogo';
import Avatar from '../components/Avatar';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import team from '../Content/Avatar';

export default function About() {
    return (
        <div className="flex flex-col h-full bg-gradient-to-b from-runik-neutral-light to-runik-background-blue">
            <NavBar aDisplay="hidden" />
            <div className="flex justify-center items-center">
                <div className="flex flex-col justify-end h-32 w-[73%] pb-0.5 max-w-6xl border-b border-[#C4C4C4]">
                    <p className="font-spartan font-semibold text-2xl">About</p>
                </div>
            </div>
            <div className="flex text-center items-center flex-col pt-12">
                <div>
                    <MainLogo hidden="hidden" />
                </div>
                <div className="pt-12 pl-4 w-3/6 flex flex-col justify-center pr-4 font-spartan text-runik-neutral-dark">
                    <p className="text-lg pb-8">
                        Meet runik, a web-app that allows users to generate
                        custom e-book dictionaries for their favourite fictional
                        worlds.
                    </p>
                    <p className="text-lg">
                        Stay fully emersed in your book while enjoying custom
                        defintitions of weapons, characters, places, and more.
                    </p>
                    <h1 className="font-semibold text-3xl pt-20 pb-12">
                        Meet the Team
                    </h1>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex justify-center pb-12">
                    <div className="flex flex-wrap justify-center items-center max-w-2xl">
                        {team.map((teamMember) => {
                            return (
                                <Avatar
                                    name={teamMember.name}
                                    title={teamMember.title}
                                    path={teamMember.src}
                                    key={teamMember.src}
                                    url={teamMember.url}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
