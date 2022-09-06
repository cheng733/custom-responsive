import { useCallback, useRef } from 'react';
import { MediaQueryAllQueryable, useMediaQuery } from 'react-responsive'
import { isObject } from './utils';


export type MediaCustomQuery = [{ [key: string]: any }]
export type MediaQueryArr = [number | undefined, number | undefined] | [number | undefined, number | undefined, number]
export type OriginMediaQuerySettings = Partial<MediaQueryAllQueryable & {
    query?: string;
}>;
export type MediaQuerySettings = Partial<MediaQueryAllQueryable & MediaQueryArr & MediaCustomQuery & {
    query?: string;
}>
export type MediaChange<q> = (params: boolean | { [key in keyof q]: boolean }) => void | undefined;


export function useMedia<T extends OriginMediaQuerySettings, U extends MediaChange<T>>(opts: T,
    onChange?: U): boolean
export function useMedia<T extends string, U extends MediaChange<T>>(opts: T,
    onChange?: U): boolean
export function useMedia<T extends MediaQueryArr, U extends MediaChange<T>>(opts: T,
    onChange?: U): boolean
export function useMedia<T extends MediaCustomQuery, U extends MediaChange<T>>(opts: T,
    onChange?: U): boolean
export function useMedia<T extends MediaQuerySettings, U extends MediaChange<T>>(
    opts: T,
    onChange?: U
): boolean | { [key in keyof T]: boolean } {
    const activeResult = useRef<{ [key: string]: any }>({})
    const queries = useRef<any[] | object>()

    const getMatches = () => {
        const keys = Object.keys(activeResult.current)
        const val = activeResult.current
        if (keys.length === 1 && keys[0] === "_default") return val["_default"]
        return val
    }

    const setQueryMatch = () => {
        if (Array.isArray(opts)) {
            if (!isObject(opts[0])) {
                const min = opts[0]
                const max = opts[1]
                const type = opts[2]
                let obj = {} as MediaQueryAllQueryable
                if (type === 0) {
                    min ? obj["minHeight"] = min : null;
                    max ? obj["maxHeight"] = max : null;

                } else {
                    min ? obj["minWidth"] = min : null;
                    max ? obj["maxWidth"] = max : null;
                }
                queries.current = obj
            } else {
                queries.current = opts
            }
        }
        if (isObject(opts)) {
            queries.current = opts
        }
        if (typeof opts === 'string') {
            queries.current = { query: opts }
        }
        if (Array.isArray(queries.current)) {
            const query = queries.current[0]
            Object.keys(query).forEach(key => {
                activeResult.current = { ...activeResult.current, [key]: false }
            })
        } else {
            activeResult.current = { _default: false }
        }
    }
    const _init = useCallback(() => {
        setQueryMatch()
        getMatches()
    }, [])
    const createListener = useCallback(() => {
        if (queries.current) {
            if (Array.isArray(queries.current)) {
                const _queries = queries.current[0]
                Object.keys(_queries).forEach(key => {
                    const _target = useMediaQuery({ query: _queries[key] })
                    activeResult.current[key] = _target
                })

            } else {
                const _target = useMediaQuery(queries.current)
                console.log(_target, '_target')
                activeResult.current['_default'] = _target
            }
        }
    }, [queries.current])
    _init()
    createListener()
    onChange?.(getMatches())
    return getMatches()
}