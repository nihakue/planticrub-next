function InstaPost({post}) {
    return <img src={post.media_url}></img>
}

export function InstaFeed({posts}) {
    return (<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {posts.slice(0,9).map(it => <InstaPost post={it} key={it.id}/>)}
    </div>)
}