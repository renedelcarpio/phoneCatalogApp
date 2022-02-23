const phones = [
	{
		id: 1,
		brand: 'iPhone',
		model: 'iPhone 11',
		description: `The iPhone 11, along with the iPhone 11 Pro, uses Apple's A13 Bionic processor, which contains a third-generation neural engine. It has three internal storage options: 64 GB, 128 GB, and 256 GB. It also has 4 GB of RAM. The iPhone 11 has an IP68 water- and dust-resistant rating along with dirt and grime, and is water-resistant up to 2 m (6.6 ft) for 30 minutes. However, the manufacturer's warranty does not cover liquid damage to the phone. Also, like previous iPhones, both phones do not have a headphone jack, and come with wired EarPods with a Lightning connector. The iPhone 11 is the first smartphone with built-in ultra-wideband hardware, via its Apple U1 chip.`,
		color: ['black', 'green', 'yellow', 'purple', 'white'],
		price: 714,
		img:
			'https://www.romapy.com/47358-large_default/apple-iphone-11--64gb-mhcp3lla-black-a2111---mhcp3lla.jpg',
	},
	{
		id: 2,
		brand: 'iPhone',
		model: 'iPhone 12',
		description: `The iPhone 12 and iPhone 12 Mini use Apple's six-core A14 Bionic processor, which contains a next-generation neural engine. They both have three internal storage options: 64, 128, and 256 GB[a]. Both also carry an IP68 water and dust resistance rating along with dirt and grime, and is water-resistant up to six meters (20 feet) for 30 minutes. However, the manufacturer warranty does not cover liquid damage to the phone.
    The iPhone 12 series are the first iPhone models to be supplied from launch without EarPods or a wall adapter, which Apple says was done to reduce carbon emissions and waste since most users already own them. Apple also claims 70% more boxes can fit on a pallet given the smaller box, and thus further reducing emissions. A USB-C to Lightning cord is still included. This change also applies retroactively to all other iPhone models still in production. To comply with French law regarding wireless device radiation and health which requires phones to be bundled with and promote use of hands-free accessories by children under 14, iPhone models will still include EarPods in this market.
    A magnetic connector known as MagSafe is introduced on the iPhone 12 models, allowing accessories such as cases and charging cords to be attached to the rear of the device. Accessories can also be stacked together.
    The devices support 5G cellular communications. This allows upload speeds of up to 200 Mbit/s and download speeds of up to 4 Gbit/s. However, only models sold in the U.S. support the fastest mmWave technology; those sold elsewhere in the world, including Canada, support only sub-6 GHz frequency bands. A new feature called Smart Data Mode enables 5G only when necessary to preserve battery life.`,
		color: ['black', 'green', 'yellow', 'purple', 'white'],
		price: 849,
		img:
			'https://ivisualcomputers.com/wp-content/uploads/2020/12/70-iphone12-azul.png',
	},
	{
		id: 3,
		brand: 'iPhone',
		model: 'iPhone 13',
		description: `Introduced on September 14, 2021, the iPhone 13 and iPhone 13 mini are Apple's newest flagship iPhones at the more affordable end, and are being sold alongside the more expensive iPhone 13 Pro and iPhone 13 Pro Max. The iPhone 13 and iPhone 13 mini are ideal for those who don't need pro-level camera features.
    The 5.4-inch iPhone 13 mini is the successor to the iPhone 12 mini, while the 6.1-inch iPhone 13 is the replacement for the iPhone 12. Both of the new iPhone 13 models are nearly identical in design to the iPhone 12 models, featuring flat edges, an aerospace-grade aluminum enclosure, a glass back, and a slight increase in thickness (7.65mm). The iPhone 13 models are available in Pink, Blue, Midnight (black), Starlight (silver/gold), and (PRODUCT)RED.
    Both of the new models feature Super Retina XDR Displays that are 28 percent brighter. The iPhone 13 mini has a 2340x1080 resolution with 476 pixels per inch, while the iPhone 13 has a 2532x1170 resolution with 460 pixels per inch. Both iPhones feature 1200 nits max brightness for HDR, along with True Tone to match the color temperature of the display to the ambient light, Wide Color for rich, vivid hues, and Haptic Touch for feedback.`,
		color: ['pink', 'blue', 'midnight blue', 'red', 'white'],
		price: 1119,
		img:
			'https://d6scj24zvfbbo.cloudfront.net/616a9af575c72d8147ecf682d1873bb5/200000684-afae9afaec/iphone-13-pink-0-ph%3Dfbe43d9248.png?ph=fbe43d9248',
	},
	{
		id: 4,
		brand: 'Samsung',
		model: 'Galaxy S21',
		description: `The Galaxy S21 series has a design similar to its predecessor, with an Infinity-O display containing a circular cutout in the top center for the front selfie camera. The S21 and S21 FE's back panel is reinforced poly-carbonate (plastic) similar to the S20 FE and Note 20 while the S21+ and S21 Ultra use Gorilla Glass Victus. The rear camera array has been integrated into the phone body except for the S21 FE which is made out of reinforced poly-carbonate integrated instead on the back cover and has a metallic surround; the S21 Ultra has a carbon fiber camera surround for exclusive colors.`,
		color: ['olive', 'graphite', 'lavender', 'white'],
		price: 1201,
		img: 'https://m.media-amazon.com/images/I/61cjeSE+Z-L._AC_SL1000_.jpg',
	},
	{
		id: 5,
		brand: 'Samsung',
		model: 'Galaxy Z Fold3',
		description: `Unfold a world of possibilities with the Samsung Galaxy Z Fold3 5G. See and do more with the ultimate foldable screen that puts a workspace, theater and game room right in your pocket. The sleek 6.2” cover display unfolds to double its size, providing one expansive 7.6” 120Hz edge-to-edge Dynamic AMOLED 2X Infinity Flex screen that's like a tablet. The compact yet powerful tablet helps you master your busy life allows you to bring your workspace anywhere with an expansive screen that gives you multiple windows making multitasking a breeze. Find your escape with multimedia magic on a mesmerizing display that's silky smooth. Take in and capture incredible uninterrupted views with a true edge-to-edge viewing experience enabled by an Under Display Camera. With Flex Mode, you can fold the Galaxy Z Fold3 5G at any angle and hold it any way you like — or not hold it at all. Find your perfect angles and your favorite ways to flex with Galaxy Z Fold3 5G Flex Mode. Exceptionally sturdy and totally sleek, Galaxy Z Fold3 5G is built with premium craftsmanship to resist water. Work, watch, and play your way, in more places on America’s largest, fastest, and most reliable 5G network.`,
		color: ['black', 'green', 'Silver'],
		price: 1499,
		img:
			'https://images.samsung.com/es/smartphones/galaxy-z-fold3-5g/buy/02_Carousel/01_Main/zfold3_carousel_mainsinglekv_mo.jpg',
	},
	{
		id: 6,
		brand: 'Samsung',
		model: 'Galaxy A72',
		description: `The Samsung Galaxy A72 features a fresh new design, similar to what we saw with the Galaxy A52. The 6.7-inch Super AMOLED display has a full-HD+ resolution and 90Hz refresh rate, and supports HDR playback. The Samsung Galaxy A72 has an in-display fingerprint sensor, but I found it to be very inconsistent with authentication and a bit sluggish too.
    The Snapdragon 720G SoC is quite underpowered compared to the competition at this price, but it's still powerful enough to handle Android 11. Games ran really well too and titles such as Genshin Impact had very playable framerates, with just some mild stutter intermittently. The Samsung Galaxy A72 has a similar camera setup as the Galaxy A52, except that the depth camera has been swapped for a more useful 8-megapixel telephoto camera. Photos captured by the main camera were generally above average under good light. The telephoto camera captured strictly average photos.
    If the Samsung name and features such as the IP rating and stereo speakers are what drew you towards the Galaxy A72, I'd suggest buying the Galaxy A52 instead and saving some money.`,
		color: ['black', 'green', 'yellow', 'purple', 'white'],
		price: 495,
		img:
			'https://cellu.store/wp-content/uploads/2021/04/samsung-galaxy-a72-128gb6gb-android-dual-sim-smartphone-white-1616405634-1.png',
	},
	{
		id: 7,
		brand: 'Xiaomi',
		model: '11T',
		description: `The smartphone is powered by the MediaTek MT6893 Dimensity 1200 5G processor and Mali-G77 MC9 GPU. The smartphone comes with a 6.67 inches and 1080 x 2400 pixels resolution. It is protected by Corning Gorilla Glass Victus.
    The rear camera consists of a triple-camera comprising a 108 MP (wide) + 8 MP (ultrawide) + 5 MP (telephoto macro). On the front, there is a 16 MP (wide).
    The sensors integrated into the device are Fingerprint (side-mounted), accelerometer, gyro, proximity, and compass. The smartphone is fueled by a Non-removable Li-Po 5000 mAh battery + Fast charging 67W, 100% in 36 min (advertised).
    The phone runs on Android 11 + MIUI 12.5 operating system. Xiaomi 11T comes in three colors: Meteorite Gray, Moonlight White, and Celestial Blue.
    It features a USB Type-C 2.0, USB On-The-Go, GPS with dual-band A-GPS, GLONASS, BDS, GALILEO, QZSS, NavIC. The smartphone is pack with 8 GB RAM with 128 GB and 256 GB internal storage.`,
		color: ['blue', 'green', 'white'],
		price: 455,
		img: 'https://i.blogs.es/47fe94/mi11t-1/450_1000.jpeg',
	},
	{
		id: 8,
		brand: 'Xiaomi',
		model: 'Mi 11',
		description: `Xiaomi Mi 11 mobile was launched on 28th December 2020. The phone comes with a 6.81-inch touchscreen display with a resolution of 1440x3200 pixels at a pixel density of 515 pixels per inch (ppi) and an aspect ratio of 20:9. Xiaomi Mi 11 is powered by an octa-core Qualcomm Snapdragon 888 processor. It comes with 8GB of RAM. The Xiaomi Mi 11 runs Android 11 and is powered by a 4,600mAh non-removable battery. The Xiaomi Mi 11 supports wireless charging, as well as proprietary fast charging.
    As far as the cameras are concerned, the Xiaomi Mi 11 on the rear packs a 108-megapixel primary camera with an f/1.85 aperture and a pixel size of 0.8-micron; a 13-megapixel camera with an f/2.4 aperture, and a 5-megapixel camera with an f/2.4 aperture. The rear camera setup has autofocus. It sports a 20-megapixel camera on the front for selfies with an f/2.4 aperture.
    The Xiaomi Mi 11 runs MIUI 12 is based on Android 11 and packs 128GB of inbuilt storage. The Xiaomi Mi 11 is a dual-SIM (GSM and GSM) mobile that accepts Nano-SIM and Nano-SIM cards. The Xiaomi Mi 11 measures 164.30 x 74.60 x 8.06mm (height x width x thickness) and weighs 196.00 grams. It was launched in Anti-glare frosted glass: Midnight Gray, Horizon Blue, Frost White Vegan leather: Lilac Purple, and Honey Beige colours. It bears a glass body.
    Connectivity options on the Xiaomi Mi 11 include Wi-Fi 802.11 a/b/g/n/ac/ax, GPS, Bluetooth v5.20, NFC, USB Type-C, 3G, 4G (with support for Band 40 used by some LTE networks in India) , and 5G. Sensors on the phone include accelerometer, ambient light sensor, compass/ magnetometer, gyroscope, proximity sensor, and in-display fingerprint sensor. The Xiaomi Mi 11 supports face unlock.`,
		color: ['blue', 'green', 'white'],
		price: 601,
		img:
			'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/main_card_image/https/bdt.computerhoy.com/sites/default/files/mi11.jpg?itok=zSZCaUuF',
	},
	{
		id: 9,
		brand: 'Xiaomi',
		model: 'Redmi Note 11',
		description: `Redmi Note 11 mobile was launched on 26th January 2022. The phone comes with a 6.43-inch touchscreen display with a resolution of 1080x2400 pixels at a pixel density of 409 pixels per inch (ppi) and an aspect ratio of 20:9. Redmi Note 11 is powered by an octa-core Qualcomm Snapdragon 680 processor. It comes with 4GB of RAM. The Redmi Note 11 runs Android 11 and is powered by a 5000mAh battery. The Redmi Note 11 supports proprietary fast charging.
    As far as the cameras are concerned, the Redmi Note 11 on the rear packs a quad camera setup featuring a 50-megapixel primary camera with an f/1.8 aperture; an 8-megapixel camera with an f/2.2 aperture; a 2-megapixel camera with an f/2.4 aperture, and a 2-megapixel camera with an f/2.4 aperture. The rear camera setup has autofocus. It has a single front camera setup for selfies, featuring a 13-megapixel sensor with an f/2.4 aperture.
    The Redmi Note 11 runs MIUI 13 is based on Android 11 and packs 64GB of inbuilt storage that can be expanded via microSD card (up to 1000GB) with a dedicated slot. The Redmi Note 11 is a dual-SIM (GSM and GSM) mobile that accepts Nano-SIM and Nano-SIM cards. The Redmi Note 11 measures 159.87 x 73.87 x 8.09mm (height x width x thickness) and weighs 179.00 grams. It was launched in Horizon Blue, Space Black, and Starburst White colours.
    Connectivity options on the Redmi Note 11 include Wi-Fi 802.11 a/b/g/n/ac, GPS, Bluetooth v5.00, Infrared, USB Type-C, 3G, and 4G (with support for Band 40 used by some LTE networks in India). Sensors on the phone include accelerometer, ambient light sensor, compass/ magnetometer, gyroscope, proximity sensor, and fingerprint sensor.`,
		color: ['blue', 'gray', 'stellar blue'],
		price: 240,
		img:
			'https://www.celulares.com/fotos/xiaomi-redmi-note-11-4g-93326-g-alt.jpg',
	},
];
