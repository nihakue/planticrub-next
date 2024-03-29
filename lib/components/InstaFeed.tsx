import Image from 'next/image'

function replaceDomain(url: string, domain: string) {
    const toModify = new URL(url);
    toModify.hostname = domain;
    return toModify.href;
}

function InstaPost({post}) {
    const src = post?.media_url;
    if (typeof src === 'string') {
        return <Image width={500} height={500} src={replaceDomain(src, 'scontent.cdninstagram.com')}></Image>
    }
}

export function InstaFeed({posts}) {
    return (<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {posts.slice(0,6).map(it => <InstaPost post={it} key={it.id}/>)}
    </div>)
}