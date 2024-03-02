export const Bar = ({ title, progress }) => {
    return (
        <>
            <h2 className="text-neutral-400 text-sm ml-4">{ title }</h2>
            <div className="bg-indigo-900 m-4 rounded-md text-sm text-white mt-2">
                <span className={`bg-indigo-500 p-2 block rounded-md`} style={{width: `${progress}%`}}>{ progress }%</span>
            </div>
        </>
    )
}