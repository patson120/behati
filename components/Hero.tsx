import { CustomButton } from '.'

const Hero = () => {
  return (
    <>
      {/* Image section */}
      <section className="flex flex-1 flex-shrink-0 w-full h-[650px] relative">
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


          <div className="flex flex-col translate-x-32 translate-y-36 h-1/2 w-2/5 gap-10">
            <h2
              className="text-white text-5xl font-medium"
            >Faites-vous plaisir tout en prenant soin de votre santé et de la planète.</h2>

            <p className="text-white text-md">
              Bienvenue chez Behati, la marque qui vous propose des produits agroalimentaires 100% bio, cultivés sans engrais dans les hautes montagnes de l’ouest Cameroun.
            </p>
            <div className="flex flex-1 space-x-3">
              <CustomButton
                title='Contactez-nous'
                containerStyle='primary_green h-9 rounded-full text-sm font-bold px-4'
                handleClick={() => { }}
              />
              <CustomButton
                title='Voir nos produits'
                containerStyle='border-2 h-9 rounded-full text-white text-sm font-bold px-4'
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
