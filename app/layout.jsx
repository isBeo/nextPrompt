import '@styles/globals.css';

export const metadata = {
    title:'AI__Prompt ',
    description:'Discover and share AI prompts',
}

const Rootlayout = () => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default Rootlayout