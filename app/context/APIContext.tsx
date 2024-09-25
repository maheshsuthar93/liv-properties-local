import React, {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect
} from 'react';
import useSWR from 'swr';
import { apiUrl, fetcher } from '../constants';
import { Property, SearchProperty, SearchParameters } from '@/app/types';

export interface APIContextData {
    error: Error | undefined;
    searchProperty: {
        data: SearchProperty | undefined;
        isLoading: boolean;
        error: Error | undefined;
    };
    setSearchParameters: (params: string) => void;
}

export const APIContextDefaultValue: APIContextData = {
    error: undefined,
    searchProperty: {
        data: undefined,
        isLoading: false,
        error: undefined
    },
    setSearchParameters: () => {}
};

export const APIContext = createContext<APIContextData>(APIContextDefaultValue);

export function APIContextProvider({ children }: { children: ReactNode }) {
    const [searchProperty, setSearchProperty] = useState<SearchProperty>();
    const [searchParameters, setSearchParameters] = useState<string>('');

    const {
        data: searchData,
        error: searchPropertyError,
        isLoading: searchPropertyisLoading
    } = useSWR<SearchProperty>(
        searchParameters
            ? `${apiUrl}/api/search${searchParameters}&sort_by=id&sort_order=DESC`
            : null,
        fetcher
    );

    useEffect(() => {
        if (searchData) {
            setSearchProperty(searchData);
        }
    }, [searchData]);

    /*
     * all errors
     */
    const error = searchPropertyError;

    return (
        <APIContext.Provider
            value={{
                error,
                searchProperty: {
                    data: searchData,
                    isLoading: searchPropertyisLoading,
                    error: searchPropertyError
                },
                setSearchParameters
            }}
        >
            {children}
        </APIContext.Provider>
    );
}

export function useAPI() {
    const context = useContext(APIContext);
    if (!context) {
        throw new Error('useAPI must be used within an APIContextProvider');
    }
    return context;
}
