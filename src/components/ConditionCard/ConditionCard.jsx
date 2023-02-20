

export const ConditionCard = ({img,text0,text1}) => {
    return (
        <article
            className="card w-[320px] h-[232px] flex flex-col justify-center items-center gap-4 p-6 shadow bg-white rounded-lg">
            <img src={img} alt="" />
            <p className="text-lg font-semibold text-center">{text0}</p>
            <p className="text-sm text-center">{text1}</p>
        </article>
    )
}
