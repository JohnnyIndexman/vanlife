const basePath = process.env.PUBLIC_URL;

const VanInfo = () => {

      const vans = [
            {
                id: 1,
                image: `${basePath}/image/pexels-alfonso-escalante-2533092.jpg`,
                type: "Simple",
                price: "$80/day",
                description: "A specialized vehicle designed for the seamless movement of goods, ensuring timely deliveries and optimized space utilization.",
                title: "Efficient Cargo Transporter",
                hostId: 123

            },
            {
                id: 2,
                image: `${basePath}/image/img2.jpg`,
                type: "Rugged",
                price: "$100/day",
                description: "A versatile, on-the-go unit equipped to handle various cargo sizes, facilitating the smooth flow of goods across destinations.",
                title: "Mobile Logistics Unit",
                hostId: 123
            },
            {
                id: 3,
                image: `${basePath}/image/van30.jpg`,
                type: "Rugged",
                price: "$100/day",
                description: " Tailored for the final leg of delivery, these vans efficiently navigate urban landscapes to bring packages directly to doorsteps.",
                title: "Last-Mile Delivery Vehicle",
                hostId: 123
            },
            {
                id: 4,
                image: `${basePath}/image/img4.jpg`,
                type: "Simple",
                price: "$80/day",
                description: " A robust and adaptable vehicle built to transport a diverse range of goods, catering to the needs of diverse delivery requirements.",
                title: "Versatile Freight Carrier"
            },
            {
                id: 5,
                image: `${basePath}/image/pexels-matt-hardy-3560366.jpg`,
                type: "Simple",
                price: "$80/day",
                description: "An integral part of supply chain management, these vans efficiently distribute goods from warehouses to points of sale or end consumers.",
                title: "Dispatch and Distribution Van",
                hdd: 75
            },
            {
                id: 6,
                image: `${basePath}/image/img5.jpg`,
                type: "Rugged",
                price: "$100/day",
                description: "Designed for maneuverability in congested areas, these vans navigate tight spaces while ensuring secure and timely delivery of parcels.",
                title: "Compact Delivery Shuttle"
            },
            {
                id: 7,
                image: `${basePath}/image/img6.jpg`,
                type: "Rugged",
                price: "$100/day",
                description: " A dependable and scalable solution for transporting packages, offering security and efficiency in moving goods from origin to destination.",
                title: "Reliable Transport Solution"
            }

        ]
       const vanshost = [
            {
                id: 4,
                image: `${basePath}/image/pexels-alfonso-escalante-2533092.jpg?v=122`,
                type: "Simple",
                price: "$80/day",
                description: "A specialized vehicle designed for the seamless movement of goods, ensuring timely deliveries and optimized space utilization.",
                title: "Efficient Cargo Transporter",
                hostId: 122

            },
            {
                id: 5,
                image: `${basePath}/image/img2.jpg`,
                type: "Rugged",
                price: "$100/day",
                description: "A versatile, on-the-go unit equipped to handle various cargo sizes, facilitating the smooth flow of goods across destinations.",
                title: "Mobile Logistics Unit",
                hostId: 1245
            },
            {
                id: 6,
                image: `${basePath}/image/van30.jpg`,
                type: "Rugged",
                price: "$100/day",
                description: " Tailored for the final leg of delivery, these vans efficiently navigate urban landscapes to bring packages directly to doorsteps.",
                title: "Last-Mile Delivery Vehicle",
                hostId: 127
            }
        ]
        const vanauth =
                {
                    name: '',
                password: '',
                isLoggedIn: false,
                login: function () {
                    if (this.name && this.password) {
                        this.isLoggedIn = true
                        return true
                    } else {
                        this.isLoggedIn = false;
                        return false;
                    }},

                setName: function (name) {
                    this.name = name;
                },
                setPassword: function (password) {
                    this.password = password;
                },
                getIsLoggedIn: function () {
                    return this.isLoggedIn;
                }
            }
        
            return {
                vans,
                vanshost,
                vanauth
            };
    }
export default VanInfo;