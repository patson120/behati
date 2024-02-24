

const HorizontalScroll = () => {


  const texts = [
    "Made in cameroun sur votre table",
    "Mangez sain, mangez bio mangez Behati",
    "Produit 100% bio",
    "Livraison gratuite à partir de 30.000 XAF",
    "Made in cameroun sur votre table",
    "Mangez sain, mangez bio mangez Behati"
  ]

  return (
    <div className="secondary-green">
      <div className='h-[44px] items-wrapper flex flex-1 flex-row justify-start items-center'>
        {
          texts.map((text, index) => (
            <p className="whitespace-nowrap" key={`${index}`}>
              <span className={"font-bold text-lg mx-3"}>&#8226;</span>
              <span className="text-sm">{text}</span>
            </p>
          )
          )
        }
      </div>
    </div>
  )
}

export default HorizontalScroll
