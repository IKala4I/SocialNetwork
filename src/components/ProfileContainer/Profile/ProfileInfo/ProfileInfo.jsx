function ProfileInfo({profile}) {
    if (!profile)
        return <></>

    return (
        <>
            <div>
                <img
                    src='https://e1.pxfuel.com/desktop-wallpaper/197/736/desktop-wallpaper-hot-girls-ultra-wide-women.jpg'
                    alt='content img'/>
            </div>
            <div>
                <div>
                    <img src={profile.photos.large} alt='ava'/>
                </div>
                ava + description
            </div>
        </>
    );
}

export default ProfileInfo;