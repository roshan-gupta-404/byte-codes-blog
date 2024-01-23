import React from 'react'
import {Container} from '../components/Index'


function Post() {
    return (
        <>
            <div className='text-white'>
                <Container>
                    <div className=''>
                        <div className='bg-slate-800 h-56 flex flex-col items-center pt-14'>

                            <h1 className='text-3xl font-semibold font-mono mb-4'>Title of Post</h1>
                            <p>Date</p>
                        </div>
                        <div className='bg-slate-900 flex flex-col items-center pt-40'>
                            <div className=' w-80 absolute -translate-y-60 rounded-xl overflow-hidden'>
                                <img src='images/img1.jpeg' />
                            </div>
                            <div className='w-3/4 mt-20 mb-8 text-justify'>
                                What is GitHub and why it is used?
                                GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. This tutorial teaches you GitHub essentials like repositories, branches, commits, and pull requests.

                                What is using of GitHub?
                                GitHub is an increasingly popular programming resource used for code sharing. It is a social networking site for programmers that many companies and organizations use to facilitate project management and collaboration

                                GitHub Official Site


                                Why use GitHub as a beginner?
                                Github is easy to use for beginners. In fact, you will only need to know a few Git commands to learn how to push code to GitHub. If you already know Git, GitHub will be a breeze but it will be a bit harder if you do not know Git. Getting on GitHub can be a game-changer for you as a new or aspiring developer.

                                What is the main advantage of GitHub?
                                GitHub provides distributed version controls geared towards tracking and managing changes to software code. In line with this, several developers can work on a Git repository and track changes along the way. Further, every team member can access the database simultaneously to view previous versions.

                                Is GitHub is free?
                                GitHub offers free and paid plans for storing and collaborating on code. Some plans are available only to personal accounts, while other plans are available only to organization and enterprise accounts. For more information about accounts, see "Types of GitHub accounts."

                                What is difference between Git and GitHub?
                                what is the difference? Simply put, Git is a version control system that lets you manage and keep track of your source code history. GitHub is a cloud-based hosting service that lets you manage Git repositories.

                                Is Git is a programming language?
                                Git is not a programming language, but it is become incredibly important for computer programmers working in almost any language you can name.

                                What are the limitations of GitHub?
                                GitHub limits the size of files allowed in repositories. If you attempt to add or update a file that is larger than 50 MiB, you will receive a warning from Git. The changes will still successfully push to your repository, but you can consider removing the commit to minimize performance impact.

                                Why should I join GitHub?
                                GitHub allows you to create, store, change, merge, and collaborate on files or code. Any member of a team can access the GitHub repository (think of this as a folder for files) and see the most recent version in real-time. Then, they can make edits or changes that the other collaborators also see.

                                How do I run code on GitHub?
                                This is the process for how to run GitHub code:

                                1. Open the file containing the code you want to run. This can be done through the GitHub website or by downloading the file to your computer.
                                2. Check the code to make sure it is correct. ...
                                3. Run the code.

                                What are the disadvantages of GitHub?
                                One major drawback is cost. Although GitHub offers free accounts, its paid plans can be quite expensive, particularly for individuals and small teams. This can limit access to some of the more advanced features and tools, making it difficult to customize the platform to specific needs.

                                What is the full form of Git?
                                In conclusion, the GIT full form is “Global Information Tracker,” a powerful version control system widely used for software development and other collaborative projects. GIT allows multiple developers to work on a project simultaneously while ensuring that their changes do not interfere with one another
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Post