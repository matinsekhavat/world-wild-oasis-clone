### sharing data between client component to server component

best way is store state into url

```javascript
function page({ params, searchParams }) {
  //only available into main page.js  file not in any server component file
}
```

for searchParms follow this instructure

```javascript
const searchParams = useSearchParams();
const router = useRouter();
const pathname = usePathname();
function handleFilter(value) {
  const params = new URLSearchParams(searchParams);
  params.set("capacity", value);
  console.log(params.toString());
  router.replace(`${pathname}?${params.toString()}`);
}
```
