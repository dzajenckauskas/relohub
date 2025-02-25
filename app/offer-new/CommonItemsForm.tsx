import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import debounce from 'lodash/debounce';
import React, { useMemo, useRef, useState } from 'react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import LuggageItemRow from './LuggageItemRow';
import { CustomItemType, OfferFormType } from './OfferNewPage';
import StyledTextInput from './StyledTextInput';

type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>;
    showAllItems?: boolean;
};
const topItems = [{
    "id": 10000324,
    "name": "TV",
    "slug": "top-tv",
    "height": 97,
    "width": 23,
    "depth": 23,
    "length": 147,
    "weight": 10,
},
{
    "id": 10000324,
    "category_id": 1,
    "name": "Bike",
    "slug": "top-bike",
    "height": 97,
    "width": 23,
    "depth": 23,
    "length": 147,
    "weight": 10,
},
{
    "id": 10000324,
    "name": "Office Chair",
    "slug": "office-chair",
    "height": 97,
    "width": 23,
    "depth": 23,
    "length": 147,
    "weight": 10,
},
{
    "id": 10000324,
    "name": "Desk",
    "slug": "top-desk",
    "height": 97,
    "width": 23,
    "depth": 23,
    "length": 147,
    "weight": 10,
}] as any[]

const CommonItemsForm = ({ form, showAllItems }: Props) => {
    const { fields, remove } = useFieldArray({
        control: form.control,
        name: 'commonItems',
    });

    const existingItemNames = useMemo(() => fields.map((v) => v.name) || [], [fields]);

    const [items, setItems] = useState<any[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');

    // Fetch data only once
    React.useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_ADMIN_API_URL}/api/inventoryOptions`);
                const data = await response.json();

                const flattenedItems = data.flatMap((group: any) => group.items).filter(item =>
                    item.name !== 'Standard box' &&
                    item.name !== 'Large box' &&
                    item.name !== 'Suitcase large' &&
                    item.name !== 'Suitcase small'
                );

                setItems(flattenedItems);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    // Debounce function using useRef to persist across renders
    const searchRef = useRef(
        debounce((query) => {
            setSearchQuery(query);
        }, 200)
    );

    // Handle search input (without debounce lag)
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        searchRef.current(event.target.value.toLowerCase());
    };

    // Optimized filtering
    const filteredItems = useMemo(() => {
        if (!searchQuery) return items?.filter(item => !existingItemNames.includes(item.name));

        const queryWords = searchQuery.split(' ').filter(Boolean);

        return items
            .filter((item) => !existingItemNames.includes(item.name)) // Remove existing items
            .filter((item) => queryWords.every((word) => item.name?.toLowerCase().includes(word)));
    }, [searchQuery, items, existingItemNames]); // Add existingItemNames as a dependency

    const handleAddItem = (item: CustomItemType) => {
        form.setValue('commonItems', [...fields, item]);
    };

    const handleRemoveItem = (item: CustomItemType) => {
        const index = fields.findIndex((field) => field.name === item.name);
        if (index !== -1) remove(index);
    };

    return (
        <Stack direction="row" gap={0} pb={0} pt={0}>
            <Box flex={1} display="flex" flexDirection="column">
                <Stack gap={2}>
                    {Object.values(
                        fields.reduce((acc, field, index) => {
                            if (!acc[field.name]) {
                                acc[field.name] = {
                                    ...field,
                                    quantity: 1,
                                    rowNo: index,
                                };
                            } else {
                                acc[field.name].quantity += 1;
                            }
                            return acc;
                        }, {} as Record<string, any>) // Ensure the accumulator is typed correctly
                    ).map((field, index) => (
                        <LuggageItemRow
                            isLastItem={index === fields.length - 1}
                            rowNo={field.rowNo}
                            key={field.id}
                            quantity={field.quantity}
                            onIncrease={() => handleAddItem(field)}
                            onDecrease={() => handleRemoveItem(field)}
                            primaryText={field.name}
                            dimensions={`${field.height} x ${field.width} x ${field.length}cm`}
                            maxWeight={field.weight}
                            form={form}
                            name={field.name}
                        />
                    ))}
                </Stack>


                {/* Search Input */}
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                    <StyledTextInput
                        fullWidth
                        onChange={handleSearch} // Uses debounce inside ref
                    />
                </Box>
                {/* Filtered Top Items List */}
                <Stack spacing={2} sx={{ maxHeight: 420, overflowY: 'auto' }}>
                    {!searchQuery &&
                        topItems
                            .filter((item) => !existingItemNames.includes(item.name)) // Exclude selected items
                            .map((item) => (
                                <LuggageItemRow
                                    key={item.id}
                                    item={item}
                                    quantity={0}
                                    onIncrease={() => handleAddItem(item)}
                                    onDecrease={() => handleRemoveItem(item)}
                                    primaryText={item.name}
                                    dimensions={`${item.height} x ${item.width} x ${item.length} cm`}
                                    maxWeight={item.weight}
                                    form={form}
                                    name={item.slug}
                                />
                            ))}
                </Stack>

                {/* Filtered Search Results */}
                <Stack spacing={2} sx={{ maxHeight: 350, overflowY: 'auto', pr: '14px' }}>
                    {searchQuery &&
                        filteredItems
                            .filter((item) => !existingItemNames.includes(item.name)) // Ensure existing items are removed
                            .map((item) => (
                                <LuggageItemRow
                                    key={item.id}
                                    item={item}
                                    quantity={0}
                                    onIncrease={() => handleAddItem(item)}
                                    onDecrease={() => handleRemoveItem(item)}
                                    primaryText={item.name}
                                    dimensions={`${item.height} x ${item.width} x ${item.length} cm`}
                                    maxWeight={item.weight}
                                    form={form}
                                    name={item.slug}
                                />
                            ))}
                    {searchQuery &&
                        filteredItems?.length === 0 &&
                        <Typography color={'error'}>No results found</Typography>
                    }
                </Stack>
            </Box>
        </Stack>
    );
};

export default CommonItemsForm;
