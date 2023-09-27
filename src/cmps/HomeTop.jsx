import { AppHeader } from "./AppHeader";


export function HomeTop() {
    return(
        <div className="app-top">
            <AppHeader />
            <div className="flex">
            <h1>Find the best <span>talent</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero illo quod, autem saepe odit eveniet quibusdam ex officiis corporis temporibus expedita omnis, labore nobis neque est vel reiciendis quas atque.</p>
            </div>
        </div>
    )
}