import { ArticleDataType } from '@/COMPONENTS/types/ArticleTypes';
import { CategoryDataType } from '@/COMPONENTS/types/CategoryTypes';
import { CountryDataType } from '@/COMPONENTS/types/CountryType';
import { getData } from '@/UTILS/getData'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const domain = process.env.NEXT_PUBLIC_DOMAIN_URL
    const countries = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/countries?pagination[limit]=100`)
    const categories = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/article-categories`)
    const articles = await getData(`${process.env.NEXT_PUBLIC_API_URL}/api/articles?populate=articleCategory`)

    const renderCountries = countries?.data?.map((country: CountryDataType) => {
        return {
            url: `${domain}/moving-to/${country?.attributes?.url}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        }
    })
    const renderCategories = categories?.data?.map((category: CategoryDataType) => {
        return {
            url: `${domain}/guides/${category?.attributes?.key}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        }
    })
    const renderArticles = articles?.data?.map((article: ArticleDataType) => {
        return {
            url: `${domain}/guides/${article?.attributes?.articleCategory?.data?.attributes?.key}/${article?.attributes?.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        }
    })
    return [
        {
            url: `${domain}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${domain}/offer`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: `${domain}/about-us`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${domain}/guides`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${domain}/moving-within-europe`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${domain}/international-moving`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${domain}/relocation-services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${domain}/moving-services`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        ...renderCategories,
        ...renderArticles,
        ...renderCountries
    ]
}