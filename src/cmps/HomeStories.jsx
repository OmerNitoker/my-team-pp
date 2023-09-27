import imgKady from '../assets/PP-images/avatar-kady.jpg'
import imgAiysha from '../assets/PP-images/avatar-aiysha.jpg'
import imgArthur from '../assets/PP-images/avatar-arthur.jpg'

export function HomeStories() {
    return (
        <div className="home-stories flex justify-center align-center">
            <section className="stories-container flex flex-column align-center justify-center">
                <div>
                <h1>Delivering real results for top</h1>
                <h1>companies. Some of our <span>success stories.</span></h1>
                </div>
                <div className="stories">
                    <div className="first-story">
                        <p> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <h5>Kady Baker</h5>
                        <img className='avatar-img' src={imgKady} />
                    </div>
                    <div className="second-story">
                        <p>“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”</p>
                        <h5>Aiysha Reese</h5>
                        <img className='avatar-img' src={imgAiysha} />
                    </div>
                    <div className="third-story">
                        <p>“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”</p>
                        <h5>Arthur Clarke</h5>
                        <img className='avatar-img' src={imgArthur} />
                    </div>
                </div>
            </section>
        </div>
    )
}