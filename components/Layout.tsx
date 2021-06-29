import Head from 'next/head'
import React, { ReactNode } from 'react'

type ChildrenProps = { 
  children: ReactNode;
  title: string;
  content: string;
}

export const Layout: React.FC<ChildrenProps> = ({title, content, children}) => {
  return (
    <>
      <Head>
        <link key={'Google preconnect'} rel='preconnect' href='https://fonts.gstatic.com' />
        <title key={'title'}>{title}</title>
        <meta key={'charSet'} charSet='utf-8' />
        <meta key={'language'} httpEquiv={'content-language'} content={'en-us'}/>
        <meta key={'viewport'} name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta key={'description'} name={'description'} content={content}/>
      </Head>
      <div className={'h-screen w-screen overflow-x-hidden'}>
        {children}
      </div>
    </>
  )
}