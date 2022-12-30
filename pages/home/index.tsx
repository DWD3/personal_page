import Head from 'next/head'
import NavBar from './nav-bar'
import MainIntro from './main-intro'
import MySkills from './my-skills'
import MyProjects from './my-projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jingcheng Wang</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='bg-white px-16 pb-10 min-h-screen font-mono'>
          <NavBar></NavBar>
          <MainIntro></MainIntro>
          <MySkills></MySkills>
          <MyProjects></MyProjects>
      </main>
    </>
  )
}
