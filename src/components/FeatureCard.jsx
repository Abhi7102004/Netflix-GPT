const FeatureCard = ({cardData}) => {
  return (
    <div className="bg-[#121741] rounded-lg px-3 pt-5 pb-20 relative">
        <h1 className="text-white font-bold font-mukta- text-2xl mb-4">{cardData.title}</h1>
        <p className="text-gray-400">{cardData.description}</p>
        <img className="absolute bottom-3 right-4 w-12" src={cardData.image} alt="" />
    </div>
  )
}
export default FeatureCard