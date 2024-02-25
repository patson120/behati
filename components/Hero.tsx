import { CustomButton } from '.'

const Hero = () => {
  return (
    <>
      {/* Image section */}
      <section className="flex flex-1 flex-shrink-0 w-full h-[650px] max-lg:h-[500px] max-sm:h-[300px] relative ">
        <div className="h-full w-1/4 flex-shrink-0">
          <img src="/assets/images/rectangle_1.png"
            className="w-full h-full" alt="Produit Camerounais" />
        </div>
        <div className="h-full w-1/4 flex-shrink-0">
          <img src="/assets/images/rectangle_2.png"
            className="w-full h-full" alt="Produit Camerounais" />
        </div>
        <div className="h-full w-1/4 flex-shrink-0">
          <img src="/assets/images/rectangle_3.png"
            className="w-full h-full" alt="Produit Camerounais" />
        </div>
        <div className="h-full w-1/4 flex-shrink-0">
          <img src="/assets/images/rectangle_4.png"
            className="w-full h-full" alt="Produit Camerounais" />
        </div>
        <div
          style={{
            background: "rgba(12, 26, 38, 0.48)"
          }}
          className="absolute top-0 right-0 bottom-0 left-0">


          <div className="margin flex flex-col 
              translate-y-2/3 max-md:translate-y-3/4 max-lg:translate-y-1/3 max-sm:translate-y-4
              w-2/5 max-md:w-4/5 max-lg:w-1/2 max-sm:mt-3
              gap-10 max-lg:gap-5 max-md:gap-3 max-sm:gap-2">
            <h2
              className="text-white text-5xl max-md:text-4xl max-sm:text-2xl font-medium"
            >Faites-vous plaisir tout en prenant soin de votre santé et de la planète.</h2>

            <p className="text-white text-md max-sm:text-xs">
              Bienvenue chez Behati, la marque qui vous propose des produits agroalimentaires 100% bio,
              cultivés sans engrais dans les hautes montagnes de l’ouest Cameroun.
            </p>
            <div className="flex flex-1 space-x-3 max-sm:mt-4">
              <CustomButton
                title='Contactez-nous'
                containerStyle='primary_green h-9 max-sm:w-full rounded-full text-sm font-bold px-4'
                handleClick={() => { }}
              />
              <CustomButton
                title='Voir nos produits'
                containerStyle='border-2 h-9 rounded-full text-white text-sm font-bold px-4 max-sm:hidden'
                handleClick={() => { }}
              />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Hero
