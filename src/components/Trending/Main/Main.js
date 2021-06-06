import './Main.css';
import ImageBox from '../ImageBox/ImageBox'
import { Link } from 'react-router-dom'


const Main = (props) => {

    const mainUrl = "/photos/tags";
    //const allTrendingNowHref = "/photos/tags-day/";
    //const allTrendingWeekHref = "/photos/tags-week/";
    const data = props.data;


    let main = null;

    if(props.url === mainUrl){
        main = (
            <div>
                <div className="trending-now">
                    <div className="trending-text view">
                        <h5>Trending Tags — Now</h5>
                        {/* <Link to={allTrendingNowHref}  onClick={()=>props.setCurrentUrl(allTrendingNowHref)}>View all trending now</Link>     */}
                        {/* <Link style={{display: 'none'}} to={allTrendingNowHref} onClick={()=>props.setCurrentUrl(allTrendingNowHref)}>View all</Link>     */}
                    </div>
                    <div className="trending-images">
                    {
                        data.map((image) => {
                            return (
                                <ImageBox 
                                    key={image.photo._id} 
                                    url={image.photo.url} 
                                    text={image.name}
                                    link={mainUrl+'/'+image.name}
                                    height="186px"
                                    />
                            );
                        })
                    }
                    </div>
                </div>
                {/* <div className="trending-week">
                    <div className="trending-text view">
                            <h5>Trending Tags — This Week</h5>
                            <Link to={allTrendingWeekHref} onClick={()=>props.setCurrentUrl(allTrendingWeekHref)}>View all trending this week</Link>    
                            <Link style={{display: 'none'}} to={allTrendingWeekHref} onClick={()=>props.setCurrentUrl(allTrendingWeekHref)}>View all</Link>    
                    </div>
                    <div className="trending-images">
                    {
                        data.trendingWeek.slice(0,4).map((image) => {
                            return (
                                <ImageBox 
                                    key={image.id} 
                                    url={image.url} 
                                    text={image.text}
                                    link={image.link}
                                    height="217px"
                                    />
                            );
                        })
                    }
                    </div>
                </div>
                <div className="most-popular">
                    <div className="trending-text view">
                            <h5>Tags — All Time Most Popular</h5>
                    </div>
                    <div className="trending-images">
                        {
                            data.mostPopular.map((image) => {
                                return (
                                    <ImageBox 
                                        key={image.id} 
                                        url={image.url} 
                                        text={image.text}
                                        link={image.link}
                                        height="186px"
                                        />
                                );
                            })
                        }
                    </div>
                </div> */}
            </div>
        )
    }
    // } 
    // else if(props.url === allTrendingNowHref)
    // {
    //     main=(
    //         <div className="trending-now">
    //             <div className="trending-text flex-start view-all">
    //                 <Link to={mainUrl} onClick={()=>props.setCurrentUrl(mainUrl)}>Tags</Link> 
    //                 {/* <span>&nbsp;--&gt;&nbsp;&nbsp;</span> */}
    //                 <span className="caret"></span>
    //                 <Link to="#">Trending Now</Link>
    //             </div>
    //             <div className="trending-images">
    //             {
    //                 data.trendingNow.map((image) => {
    //                     return (
    //                         <ImageBox 
    //                             key={image.id} 
    //                             url={image.url} 
    //                             text={image.text}
    //                             link={image.link}
    //                             height="186px"
    //                             />
    //                     );
    //                 })
                    
    //             }
    //             <p></p> 
    //             </div>
    //         </div>
    //     )
    // } 
    // else if(props.url===allTrendingWeekHref){  
    //     main=(
    //         <div className="trending-now">
    //             <div className="trending-text flex-start view-all">
    //                 <Link to={mainUrl} onClick={()=>props.setCurrentUrl(mainUrl)}>Tags</Link> 
    //                 {/* <span>&nbsp;--&gt;&nbsp;&nbsp;</span> */}
    //                 <span className="caret"></span>
    //                 <Link to="#">Trending Now</Link>
    //             </div>
    //             <div className="trending-images">
    //             {
    //                 data.trendingWeek.map((image) => {
    //                     return (
    //                         <ImageBox 
    //                             key={image.id} 
    //                             url={image.url} 
    //                             text={image.text}
    //                             link={image.link}
    //                             height="186px"
    //                             />
    //                         );
    //                 })
                    
    //             }
    //             <p></p> 
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div className="custom-container main">
            {main}
        </div>
    );
}

export default Main;