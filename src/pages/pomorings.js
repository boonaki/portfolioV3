import Head from 'next/head'
import Image from 'next/image'
import logo from '../../public/imgs/pomo_launch_v3.png'
import example1 from '../../public/imgs/example_pomo.png'

const Evolvr = () => {
    return (
        <>
            <Head>
                <title>POMO Rings: Focus - Project</title>
                <meta name="author" content="Josh Durrett" />
            </Head>
            <div className="detail-view">
                <div className="mb-4">
                    <div className="px-4">
                        <Image src={logo} alt="gif" className="w-[100px] my-6"></Image>
                    </div>
                    <h1 className='detail-heading'>POMO Rings</h1>
                    <div>
                        <div className="font-mono">
                            <p>Capture and leverage your focus with a simple pomodoro timer application designed to highlight the two essential modes of thinking: <strong>focused</strong> and <strong>diffused</strong>.</p><br />
                            <p>These two modes are proposed by Barbara Oakley in her book <a className='link' href="https://barbaraoakley.com/books/a-mind-for-numbers/">"A Mind for Numbers"</a>.</p>
                            <br />
                        </div>
                        <div className="">
                            <a href="https://evolvr.ink" className="button-primary w-fit">View on App Store &gt;</a>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <section className='space-y-5'>
                        <div className="w-full max-w-[800px] space-y-2">
                            <h3 id='favorite-tech' className="font-bold text-2xl">Tech Used</h3>
                            <ul className="tech-list">
                                <li className="tech-list-item">Swift</li>
                                <li className="tech-list-item">SwiftUI</li>
                                <li className="tech-list-item">SwiftData</li>
                            </ul>
                        </div>
                    </section>
                    <div className="px-4">
                        <Image src={example1} alt="gif" className="w-[300px] my-6"></Image>
                    </div>
                    <div id='privacy' className='pt-4'>
                        <h2 className='font-bold text-4xl'><a href='/pomorings#privacy' className='hover:underline'>#</a> Privacy Policy</h2>
                        <span className='text-neutral-400'>for <strong>POMO Rings: Focus</strong></span>
                        <p className='text-sm text-neutral-500'>This policy is effective as of Friday, June 14 2024.</p>
                        <br />
                        <div className='font-mono'>
                            <p>POMO Rings: Focus does not collect, store, or process any personal data from users. The only information stored by the application is the task data that users voluntarily enter within the app, and timer usage data. This data is stored locally on the user's device and is not transmitted or shared outside the device.</p>
                            <br />
                            <p>By using POMO Rings: Focus, you acknowledge that no data is collected or shared with any third parties.</p>
                            <br/>
                            <p>I take reasonable measures to protect the task data stored on the user's device. However, please be aware that no method of storage is 100% secure. While I strive to use commercially acceptable means to protect your data, I cannot guarantee its absolute security.</p>
                            <br/>
                            <p>I may update this privacy policy from time to time. If I make any changes, I will notify you by revising the effective date at the top of the policy. I encourage you to review the privacy policy whenever you access the application to stay informed about information practices used within POMO Rings: Focus.</p>
                            <br/>
                            <p>If you have any questions or concerns about this privacy policy, please contact me at <a className='underline' href='mailto:joshdurrett17@gmail.com'>joshdurrett17@gmail.com</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Evolvr