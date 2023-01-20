import { Box, Button, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import {
    FeaturedBrands,
    health,
    popularCats,
    topSellingProducts,
    WinterCare,
    SpotLight
} from "../components/Constants";
import BrandsCard from "../components/BrandsCard";
import ProductsCard from "../components/ProductsCard";


const ProductsAndBrandsBox = () => {
    return (
        <Box bg="#f6f6f6">
            {/* Top image */}
            <Box p="1rem">
                <Image
                    w="95%"
                    m="auto"
                    src="https://res.cloudinary.com/du8msdgbj/image/upload/v1647251796/ueyxzzku83yuvpqxyrwe.png"
                />
            </Box>
            {/* End */}

            {/* Feature brands --> 1 */}
            <Box mt="2rem">
                <Box display="flex" justifyContent="space-between" px="2rem">
                    <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                        Featured Brands
                    </Text>
                    <Link href="http://localhost:3000/allProducts" target="_blank">
                        <Button
                            bgColor="#ff6f61"
                            _hover={{ bg: "#ff6f61" }}
                            width="fit-content"
                            color="white"
                        >
                            SEE ALL
                        </Button>
                    </Link>
                </Box>
                <BrandsCard data={FeaturedBrands} />
            </Box>
            {/* Feature brands end */}

            {/* Popular Categories --> 2 */}
            <Box mt="2rem">
                <Text
                    pl="2rem"
                    fontWeight={"400"}
                    lineHeight={"26px"}
                    fontSize={"22px"}
                >
                    Popular Categories
                </Text>
                <BrandsCard data={popularCats} />
            </Box>
            {/* Popular Categories end */}

            {/* Products --> 3 */}
            <Box mt="2rem">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    px="2rem"
                    mb="0.5rem"
                >
                    <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                        Top Sellers From Ensure
                    </Text>
                    <Link href="http://localhost:3000/allProducts" target="_blank">
                        <Button
                            bgColor="#ff6f61"
                            _hover={{ bg: "#ff6f61" }}
                            width="fit-content"
                            color="white"
                        >
                            SEE ALL
                        </Button>
                    </Link>
                </Box>
                <ProductsCard data={topSellingProducts} />
            </Box>

            {/* brands --> 4 */}
            <Box mt="2rem">
                <Box display="flex" justifyContent="space-between" px="2rem">
                    <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                        Health
                    </Text>
                    <Link href="http://localhost:3000/allProducts" target="_blank">
                        <Button
                            bgColor="#ff6f61"
                            _hover={{ bg: "#ff6f61" }}
                            width="fit-content"
                            color="white"
                        >
                            SEE ALL
                        </Button>
                    </Link>
                </Box>
                <BrandsCard data={health} />
            </Box>

            {/* Products -->  5 */}
            <Box mt="2rem">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    px="2rem"
                    mb="0.5rem"
                >
                    <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                        In the spotlight
                    </Text>
                    <Link href="http://localhost:3000/allProducts" target="_blank">
                        <Button
                            bgColor="#ff6f61"
                            _hover={{ bg: "#ff6f61" }}
                            width="fit-content"
                            color="white"
                        >
                            SEE ALL
                        </Button>
                    </Link>
                </Box>
                <ProductsCard data={SpotLight} />
            </Box>

            {/* Products  --> 6 */}
            <Box mt="2rem">
                <Box display="flex" justifyContent="space-between" px="2rem">
                    <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                        New arrivals on TATA 1mg
                    </Text>
                    <Link href="http://localhost:3000/allProducts" target="_blank">
                        <Button
                            bgColor="#ff6f61"
                            _hover={{ bg: "#ff6f61" }}
                            width="fit-content"
                            color="white"
                        >
                            SEE ALL
                        </Button>
                    </Link>
                </Box>
                <BrandsCard data={popularCats} />
            </Box>

            {/* Products  --> 7 */}
            <Box mt="2rem">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    px="2rem"
                    mb="0.5rem"
                >
                    <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                        Diabetic medicines
                    </Text>
                    <Link href="http://localhost:3000/allProducts" target="_blank">
                        <Button
                            bgColor="#ff6f61"
                            _hover={{ bg: "#ff6f61" }}
                            width="fit-content"
                            color="white"
                        >
                            SEE ALL
                        </Button>
                    </Link>
                </Box>
                <ProductsCard data={topSellingProducts} />
            </Box>

            {/* winter care ---> 8  */}
            <Box mt="2rem">
                <Box display="flex" justifyContent="space-between" px="2rem">
                    <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                        Winter care
                    </Text>
                    <Link href="http://localhost:3000/allProducts" target="_blank">
                        <Button
                            bgColor="#ff6f61"
                            _hover={{ bg: "#ff6f61" }}
                            width="fit-content"
                            color="white"
                        >
                            SEE ALL
                        </Button>
                    </Link>
                </Box>
                <BrandsCard data={WinterCare} />
            </Box>


            {/* Products  --->  9 */}

            <Box mt="2rem">
                <Box
                    display="flex"
                    justifyContent="space-between"
                    px="2rem"
                    mb="0.5rem"
                >
                    <Text fontWeight={"400"} lineHeight={"26px"} fontSize={"22px"}>
                    Trending now
                    </Text>
                    <Link href="http://localhost:3000/allProducts" target="_blank">
                        <Button
                            bgColor="#ff6f61"
                            _hover={{ bg: "#ff6f61" }}
                            width="fit-content"
                            color="white"
                        >
                            SEE ALL
                        </Button>
                    </Link>
                </Box>
                <ProductsCard data={topSellingProducts} />
            </Box>
        </Box>
    );
};

export default ProductsAndBrandsBox;
