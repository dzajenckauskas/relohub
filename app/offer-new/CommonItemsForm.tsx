import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState } from 'react';
import { UseFormReturn, useFieldArray } from 'react-hook-form';
import LuggageItemRow from './LuggageItemRow';
import { CustomItemType, OfferFormType } from './OfferNewPage';
import StyledTextInput from './StyledTextInput';

type Props = {
    form: UseFormReturn<OfferFormType, any, undefined>;
};

const CommonItemsForm = ({ form }: Props) => {
    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'commonItems',
    });
    console.log(fields?.map((v) => v.name), "fields");

    const existingItemNames = fields?.map((v) => v.name) || [];


    const [items, setItems] = useState<any[]>([]); // To store all fetched items
    const [filteredItems, setFilteredItems] = useState<any[]>([]); // To store filtered items based on search
    const [searchQuery, setSearchQuery] = useState<string>(''); // To store the search query

    // Fetch inventory data from API
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://admin.deliver1.co.uk/api/inventoryOptions');
                const data = await response.json();

                // Flatten the items from all groups
                const flattenedItems = data.flatMap((group: any) => group.items);

                // Get the names of the items already in the fields array

                // Filter out items that already exist in the fields array
                const filteredItems = flattenedItems.filter(item => item);

                setItems(filteredItems); // Store the filtered items
                setFilteredItems(filteredItems); // Set initial random items
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);



    // Custom throttle function
    const throttle = (fn: Function, delay: number) => {
        let lastTime = 0;
        return function (...args: any[]) {
            const now = new Date().getTime();
            if (now - lastTime >= delay) {
                lastTime = now;
                fn(...args);
            }
        };
    };

    // Handle search query change with throttle
    const handleSearch = throttle((event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value.toLowerCase(); // Normalize search input
        setSearchQuery(query);

        // Split query into individual words
        const queryWords = query.split(' ').filter(Boolean);

        // Filter items based on search query
        if (queryWords.length > 0) {
            const filtered = items.filter((item) => {
                const itemName = item.name ? item.name.toLowerCase() : '';
                // Check if all query words are present in the item name
                return queryWords.every((word) => itemName.includes(word));
            });
            setFilteredItems(filtered);
        } else {
            setFilteredItems((items)); // Show random items if search is cleared
        }
    }, 100); // Throttle the search by 300ms

    // Handle adding an item to the form
    const handleAddItem = (item: CustomItemType) => {
        console.log(item, "item");

        // Add item to the form
        form.setValue('commonItems', [...fields, item]);

        // Remove item from filteredItems list after adding it to the form
        setFilteredItems(filteredItems.filter(filteredItem => filteredItem.name !== item.name));
    };
    const handleRemoveItem = (item: CustomItemType) => {
        console.log(item, "item");

        // Remove item from the form
        const index = fields.findIndex((field) => field.name === item.name); // Find the index of the item
        if (index !== -1) {
            remove(index); // Remove item from the form
        }

        // Remove item from filteredItems list after removing it from the form
        setFilteredItems(filteredItems.filter(filteredItem => filteredItem.name !== item.name));
    };


    return (
        <Stack direction="row" gap={2} pb={2} pt={2}>
            <Box flex={1} display="flex" flexDirection="column" gap={1}>
                {/* Render custom items in the form */}
                {fields
                    ?.filter((value, index, self) =>
                        self.findIndex((item) => item.name === value.name) === index // Ensure no duplicates based on name
                    )?.map((field, index) => {
                        // Count the occurrences of this item in the fields array
                        const quantity = fields.filter((item) => item.name === field.name).length;

                        return (
                            <Box key={field.id}>
                                <LuggageItemRow
                                    quantity={quantity} // Set quantity to the count of duplicates
                                    onIncrease={() => handleAddItem(field)} // Add new item to custom items
                                    onDecrease={() => handleRemoveItem(field)} // Add new item to custom items
                                    primaryText={field.name} // Custom item name
                                    dimensions={`${field.height} x ${field.width} x ${field.length} cm`} // Dimensions
                                    maxWeight={field.weight} // Max weight
                                    form={form}
                                    name={field.name} // The unique identifier
                                />
                            </Box>
                        );
                    })}



                <Box mb={2}>
                    <StyledTextInput
                        placeholder="Search items..."
                        fullWidth
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </Box>

                {searchQuery && filteredItems?.filter((v) => !existingItemNames.includes(v.name))?.map((item) => (
                    <LuggageItemRow
                        item={item}
                        onIncrease={() => handleAddItem(item)} // Add new item to custom items
                        onDecrease={() => handleRemoveItem(item)} // Add new item to custom items
                        key={item.id}
                        primaryText={item.name} // Default text if name is undefined
                        dimensions={`${item.height} x ${item.width} x ${item.length} cm`}
                        maxWeight={item.weight}
                        form={form}
                        name={item.slug}
                    />
                ))}
            </Box>
        </Stack>
    );
};

export default CommonItemsForm;
