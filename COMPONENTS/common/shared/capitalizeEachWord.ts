export const capitalizeEachWord = (str?: string) => {
    if (!str) return "";
    return str
        .replace(/_/g, " ") // Replace underscores with spaces
        .toLowerCase() // Convert to lowercase
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word
};
