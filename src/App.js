import logo from './logo.svg';
import ReactTypingEffect from 'react-typing-effect';
import styles from './App.module.css';
import brain from './brain.svg';
import circuit from './circuit.svg';
import light from './light.svg';
import Service1 from './services22-1.svg';
import Service2 from './services22-2.svg';
import Service3 from './services22-3.svg';
import sample1 from './chatbot.jpg';
import sample2 from './sample2.png';
import sample3 from './sample3.jpg';
import digi1 from './digi1.jpg';
import digi2 from './digi2.jpg';
import digi3 from './digi3.jpg';
import digi4 from './digi4.jpg';
import digi5 from './digi5.jpg';
import blog1 from './blog1.jpg';
import blog2 from './blog2.jpg';
import blog3 from './blog3.jpg';
import blog4 from './blog4.jpg';
import blog5 from './blog5.jpg';
import blog6 from './blog6.jpg';
import blog7 from './blog7.jpg';


function App() {
    return (
        <div className={styles.App}>


            <div className={styles.Header}>
                <div className={styles.tagLink}>Home</div>
                <div className={styles.tagLink}>Services</div>
                <div className={styles.tagLink}>Samples</div>
                <div className={styles.tagLink}>CaseStudies</div>
                <div className={styles.tagLink}>Blog</div>
            </div>
            <div className={styles.messageIcon}></div>


            <div className={styles.container1}>

                <div className={styles.container2}>
                    <div className={styles.container3}>
                        <div className={styles.container4}>
                            <div className={styles.containerIntroductionText}>
                                <div className={styles.containerIntroductionTextDescription}>
                                    <div className={styles.containerIntroductionTextDecriptionTitle}>
                                        <div className={styles.containerIntroductionTextDecriptionTitle1}>CORTEX</div>
                                        <div className={styles.containerIntroductionTextDecriptionTitle2}>COPYWRITER</div>
                                    </div>
                                    <div className={styles.containerIntroductionTextDecriptionTitleParagraph}>
                                        <p>Enhance your communications with <br />psychology-based copywriting and UX<br /> writing</p>
                                        {/* <ReactTypingEffect speed={80} typingDelay={500} eraseDelay={500} eraseSpeed={50} text={["Enhance your communications with psychology-based copywriting and UX writing"]} /> */}
                                        
                                    </div>
                                    <div className={styles.containerIntroductionTextDecriptionTitleButton}>
                                        Send a message
                                    </div>
                                </div>
                            </div>
                            <div className={styles.containerIntroductionImage}>
                                <img src={light} className={styles.introductionImageLight} />
                                <img src={circuit} className={styles.introductionImageCircuit} />
                                <img src={brain} className={styles.introductionImageBrain} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.IntroductionBackground} />
                </div>





                <div className={styles.container22}>
                    <div className={styles.container22Services}>
                        <div className={styles.container22ServiceInner}>
                            <div className={styles.container22ServiceInnerBoxLeft}>
                                <div className={styles.container22ServicesImage}>
                                    <img className={styles.ServiceImage} src={Service1} />
                                </div>
                            </div>
                            <div className={styles.container22ServiceInnerBoxRight}>

                                <h1>UX Writing</h1>
                                <p className={styles.paragraphServices}>
                                    I develop clear and useful text in product interfaces to
                                    help users reach a specific goal, whether that's completing
                                    a form or tapping a button. This includes every type of content
                                    from on-screen help systems, user onboarding and in-app messages
                                    to push notifications and tooltips.
                                </p>
                                <div className={styles.paragraphServices}>
                                    <div className={styles.tagServices}>Microscopy</div>
                                    <div className={styles.tagServices}>Taxonomy & Labeling</div>
                                    <div className={styles.tagServices}>Chatbots</div>
                                    <div className={styles.tagServices}>User Research</div>
                                    <div className={styles.tagServices}>Content Style Guide</div>
                                    <div className={styles.tagServices}>User Testing</div>
                                    <div className={styles.tagServices}>Design Principles</div>
                                    <div className={styles.tagServices}>Prototypes</div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container22Services}>
                        <div className={styles.container22ServiceInner}>
                            <div className={styles.container22ServiceInnerBoxLeft}>
                                <h1>Website Copywriting</h1>
                                <p className={styles.paragraphServices}>
                                    Your website is a dialogue with your audience. I capture the essence
                                    of your business and communicate it clearly. Carefully considered
                                    writing and SEO best practices allow me to craft the perfect user
                                    journey online. Let me draw the map that guides users every step
                                    of the way from discovery, to consideration, to conversion.
                                </p>
                                <div className={styles.paragraphServices}>
                                    <div className={styles.tagServices}>Information Architecture</div>
                                    <div className={styles.tagServices}>Wireframes</div>
                                    <div className={styles.tagServices}>Competitor Analysis</div>
                                    <div className={styles.tagServices}>On-page SEO</div>
                                    <div className={styles.tagServices}>Off-page SEO</div>
                                    <div className={styles.tagServices}>USP/UVP</div>
                                    <div className={styles.tagServices}>Landing Page</div>
                                    <div className={styles.tagServices}>Sales Letter</div>

                                </div>
                            </div>
                            <div className={styles.container22ServiceInnerBoxRight}>
                                <div className={styles.container22ServicesImage}>
                                    <img className={styles.ServiceImage} src={Service2} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container22Services}>
                        <div className={styles.container22ServiceInner}>
                            <div className={styles.container22ServiceInnerBoxLeft}>
                                <div className={styles.container22ServicesImage}>
                                    <img className={styles.ServiceImage} src={Service3} />
                                </div>
                            </div>
                            <div className={styles.container22ServiceInnerBoxRight}>
                                <h1>Content Writing</h1>
                                <p className={styles.paragraphServices}>
                                    Give your business a competitive edge with powerful content
                                    that can be targeted to any segment of your audience. No matter
                                    how large or complex your project, my custom-built solutions
                                    including articles, eDMs, and case studies will help you implement
                                    a plan that maximizes your business’s online exposure.
                                </p>
                                <div className={styles.paragraphServices}>
                                    <div className={styles.tagServices}>Headlines & Taglines</div>
                                    <div className={styles.tagServices}>Content Strategy</div>
                                    <div className={styles.tagServices}>Blogs & Articles</div>
                                    <div className={styles.tagServices}>Social Media Content</div>
                                    <div className={styles.tagServices}>Video Scripts</div>
                                    <div className={styles.tagServices}>eDMs & Newsletters</div>
                                    <div className={styles.tagServices}>Case Studies</div>
                                    <div className={styles.tagServices}>Whitepapers</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className={styles.container23}>
                    <div className={styles.container23Inner}>
                        <div className={styles.container23InnerTitle}>
                            <h3 className={styles.container23InnerTitleHeading}>Samples</h3>
                            <h4 className={styles.container23InnerTitleTagLine}>Useful UX</h4>
                        </div>


                        <div className={styles.container23InnerSample}>



                            <div className={styles.container23Sample}>
                                <div className={styles.container23SampleImage}>
                                    <img src={sample1} className={styles.sampleImage} />
                                    <div className={styles.sampleKeyword}></div>
                                </div>
                                <div className={styles.container23SampleText}>
                                    <div className={styles.container23SampleTextTitle}>Conversation Design</div>
                                    <div className={styles.container23SampleTextInfo}>
                                        I designed a <strong>chatbot personality and scripts</strong>
                                        to convert complex mattress fitting data into simple dialogue
                                        for a chatbot that <strong>guides customers</strong> in choosing
                                        the right mattress for their weight range.
                                    </div>
                                    <div class={styles.container23SampleLink}></div>
                                </div>
                                {/* <div class={styles.container23SampleLink}></div> */}
                            </div>
                            <div className={styles.container23Sample}>
                                <div className={styles.container23SampleImage}>
                                    <img src={sample2} className={styles.sampleImage} />
                                    <div className={styles.sampleKeyword}></div>
                                </div>
                                <div className={styles.container23SampleText}>
                                    <div className={styles.container23SampleTextTitle}>User Onboarding</div>
                                    <div className={styles.container23SampleTextInfo}>
                                        To create a smooth introduction to a SaaS product, I used
                                        <strong>reassuring details</strong> and informative labels
                                        to reduce ambiguity and <strong>improve conversion rates</strong>.
                                    </div>
                                    <div class={styles.container23SampleLink}></div>
                                </div>

                            </div>
                            <div className={styles.container23Sample}>
                                <div className={styles.container23SampleImage}>
                                    <img src={sample3} className={styles.sampleImage} />
                                    <div className={styles.sampleKeyword}></div>
                                </div>
                                <div className={styles.container23SampleText}>
                                    <div className={styles.container23SampleTextTitle}>User Onboarding</div>
                                    <div className={styles.container23SampleTextInfo}>
                                        To create a smooth introduction to a SaaS product, I used
                                        <strong>reassuring details</strong> and informative labels
                                        to reduce ambiguity and <strong>improve conversion rates</strong>.
                                    </div>
                                </div>
                            </div>





                        </div>




                    </div>
                </div>
                <div className={styles.container23}>
                    <div className={styles.container23Inner}>
                        <div className={styles.container23InnerTitle}>
                            {/* <h3 className={styles.container23InnerTitleHeading}>Samples</h3> */}
                            <h4 className={styles.container23InnerTitleTagLine}>Digital Copy</h4>
                        </div>


                        <div className={styles.container23InnerSample}>



                            <div className={styles.container23Sample}>
                                <div className={styles.container23SampleImage}>
                                    <img src={digi2} className={styles.sampleImage} />
                                    <div className={styles.sampleKeyword}></div>
                                </div>
                                <div className={styles.container23SampleText}>
                                    <div className={styles.container23SampleTextTitle}>Rebranding Campaign</div>
                                    <div className={styles.container23SampleTextInfo}>
                                        I developed a new brand voice and brand identity –
                                    <strong>content style guide, design system</strong>,
                                    brand name, logo, tagline, and website – to <strong>
                                            improve communications and online presence.</strong>

                                    </div>
                                    <div class={styles.container23SampleLink}></div>
                                </div>
                                {/* <div class={styles.container23SampleLink}></div> */}
                            </div>
                            <div className={styles.container23Sample}>
                                <div className={styles.container23SampleImage}>
                                    <img src={digi5} className={styles.sampleImage} />
                                    <div className={styles.sampleKeyword}></div>
                                </div>
                                <div className={styles.container23SampleText}>
                                    <div className={styles.container23SampleTextTitle}>Facebook Ads</div>
                                    <div className={styles.container23SampleTextInfo}>
                                        My general strategy for writing Facebook ads with <strong>limited space</strong> is to make sure the copy focuses on a single, specific thought, and shows <strong>empathy</strong>.
                                    </div>
                                    <div class={styles.container23SampleLink}></div>
                                </div>

                            </div>
                            <div className={styles.container23Sample}>
                                <div className={styles.container23SampleImage}>
                                    <img src={digi3} className={styles.sampleImage} />
                                    <div className={styles.sampleKeyword}></div>
                                </div>
                                <div className={styles.container23SampleText}>
                                    <div className={styles.container23SampleTextTitle}>Explainer Video</div>
                                    <div className={styles.container23SampleTextInfo}>
                                        I wrote, storyboarded, and directed a video for an eLearning company. The copy helped <strong>increase sales 9.86%</strong> by inspiring the audience to think, feel, and act.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.container23Sample}>
                                <div className={styles.container23SampleImage}>
                                    <img src={digi4} className={styles.sampleImage} />
                                    <div className={styles.sampleKeyword}></div>
                                </div>
                                <div className={styles.container23SampleText}>
                                    <div className={styles.container23SampleTextTitle}>Youtube Ads</div>
                                    <div className={styles.container23SampleTextInfo}>
                                        I wrote, storyboarded, and directed a 3D animated video advertisement to introduce a company mascot. The ad ran for 30 days and yielded <strong>19 conversions with a 67% view rate</strong>.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.container23Sample}>
                                <div className={styles.container23SampleImage}>
                                    <img src={digi1} className={styles.sampleImage} />
                                    <div className={styles.sampleKeyword}></div>
                                </div>
                                <div className={styles.container23SampleText}>
                                    <div className={styles.container23SampleTextTitle}>Pilot ScreenPlay</div>
                                    <div className={styles.container23SampleTextInfo}>
                                        My award-winning, original, sci-fi, adult animated, pilot screenplay has <strong>successfully been pitched</strong> to production companies in the USA and Australia.
                                    </div>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
                <div className={styles.container24}>

                    <div className={styles.caseStudyInner}>

                        <div className={styles.caseStudyInnerHeading}>
                            <h3 className={styles.caseStudyInnerHeadingStyles}>Case Studies</h3>
                        </div>
                        <div className={styles.caseStudyInnerContent}>


                            <div className={styles.caseStudySamples}>
                                <div className={styles.caseStudyOverlay}>
                                    <div className={styles.caseStudyOverlayHeading}>
                                        <h3 className={styles.caseStudyOverlayTitle}>Ausbeds: Scripted Chatbot</h3>
                                    </div>
                                    <div className={styles.caseStudyOverlayAuthor}>Cortex Copywriter</div>
                                </div>
                                <div className={styles.caseStudyLogo}> </div>
                                <div className={styles.caseStudyImage}>
                                    <img className={styles.caseStudyImages} src={blog1} />
                                </div>
                            </div>

                            <div className={styles.caseStudySamples}>
                                <div className={styles.caseStudyOverlay}>
                                    <div className={styles.caseStudyOverlayHeading}>
                                        <h3 className={styles.caseStudyOverlayTitle}>Blaze Research: Rebrand</h3>
                                    </div>
                                    <div className={styles.caseStudyOverlayAuthor}>Cortex Copywriter</div>
                                </div>
                                <div className={styles.caseStudyLogo}> </div>
                                <div className={styles.caseStudyImage}>
                                    <img className={styles.caseStudyImages} src={blog2} />
                                </div>
                            </div>


                            <div className={styles.caseStudySamples}>
                                <div className={styles.caseStudyOverlay}>
                                    <div className={styles.caseStudyOverlayHeading}>
                                        <h3 className={styles.caseStudyOverlayTitle}>Atlassian: Content Design</h3>
                                    </div>
                                    <div className={styles.caseStudyOverlayAuthor}>Cortex Copywriter</div>
                                </div>
                                <div className={styles.caseStudyLogo}> </div>
                                <div className={styles.caseStudyImage}>
                                    <img className={styles.caseStudyImages} src={blog3} />
                                </div>
                            </div>



                        </div>

                    </div>

                </div>
                <div className={styles.container25}>

                    <div className={styles.caseStudyInner}>

                        <div className={styles.caseStudyInnerHeading}>
                            <h3 className={styles.caseStudyInnerHeadingStyles}>Blog</h3>
                        </div>
                        <div className={styles.caseStudyInnerContent}>


                            <div className={styles.caseStudySamples}>
                                <div className={styles.caseStudyOverlay}>
                                    <div className={styles.caseStudyOverlayHeading}>
                                        <h3 className={styles.caseStudyOverlayTitle}>What is digital copywriting? The evolution of copy from <em>Mad Men</em> to <em>UX writing</em> and <em>beyond</em></h3>
                                    </div>
                                    <div className={styles.caseStudyOverlayAuthor}>Cortex Copywriter</div>
                                </div>
                                <div className={styles.caseStudyLogo}> </div>
                                <div className={styles.caseStudyImage}>
                                    <img className={styles.caseStudyImages} src={blog4} />
                                </div>
                            </div>

                            <div className={styles.caseStudySamples}>
                                <div className={styles.caseStudyOverlay}>
                                    <div className={styles.caseStudyOverlayHeading}>
                                        <h3 className={styles.caseStudyOverlayTitle}>Vertical video to virtual vistas. How will the screenwriting craft evolve?</h3>
                                    </div>
                                    <div className={styles.caseStudyOverlayAuthor}>Cortex Copywriter</div>
                                </div>
                                <div className={styles.caseStudyLogo}> </div>
                                <div className={styles.caseStudyImage}>
                                    <img className={styles.caseStudyImages} src={blog5} />
                                </div>
                            </div>


                            <div className={styles.caseStudySamples}>
                                <div className={styles.caseStudyOverlay}>
                                    <div className={styles.caseStudyOverlayHeading}>
                                        <h3 className={styles.caseStudyOverlayTitle}>Top 3 ways psychology-based copywriting satisfies user needs</h3>
                                    </div>
                                    <div className={styles.caseStudyOverlayAuthor}>Cortex Copywriter</div>
                                </div>
                                <div className={styles.caseStudyLogo}> </div>
                                <div className={styles.caseStudyImage}>
                                    <img className={styles.caseStudyImages} src={blog6} />
                                </div>
                            </div>

                            <div className={styles.caseStudySamples}>
                                <div className={styles.caseStudyOverlay}>
                                    <div className={styles.caseStudyOverlayHeading}>
                                        <h3 className={styles.caseStudyOverlayTitle}>Enhance your UX writing with FBI negotiation tactics</h3>
                                    </div>
                                    <div className={styles.caseStudyOverlayAuthor}>Cortex Copywriter</div>
                                </div>
                                <div className={styles.caseStudyLogo}> </div>
                                <div className={styles.caseStudyImage}>
                                    <img className={styles.caseStudyImages} src={blog7} />
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
                <div className={styles.Footer}>
                    <p>Cortex Copywriter Inc.</p>
                </div>
            </div>


        </div>
    );
}

export default App;