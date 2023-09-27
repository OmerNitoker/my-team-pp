import { AppContact } from "../cmps/AppContact";
import { AppFooter } from "../cmps/AppFooter";
import { HomeDetails } from "../cmps/HomeDetails";
import { HomeStories } from "../cmps/HomeStories";
import { HomeTop } from "../cmps/HomeTop";


export function HomePage() {
    return (
        <div className="home-layout">
        <HomeTop />
        <HomeDetails />
        <HomeStories />
        <AppContact />
        <AppFooter />
        </div>
    )
}