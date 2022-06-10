import{resolve as d,relative as P,sep as g}from"path";import{pathToFileURL as R,fileURLToPath as f}from"url";import{resolve as u}from"path";import{readdir as h}from"fs/promises";async function p(i,r,a=!1){let t=0,e=[],l=await h(i,{withFileTypes:!0}),s=[];for(;t<l.length;){let n=l[t++];a&&n.isDirectory()?s.push(p(u(i,n.name),r,!0)):n.isFile()&&r.test(n.name)&&e.push(u(i,n.name))}t=0;let o=await Promise.all(s);for(;t<o.length;)e.push(...o[t++]);return e}var k={name:"@erwin-kort/esbuild-plugin",setup:async i=>{let r=/.(m|c)?ts$/;i.onResolve({filter:/\/\*$/,namespace:"file"},({path:a,importer:t,resolveDir:e,kind:l})=>{if(l!="import-statement")throw new Error("glob import only works with import statements");let s="js";return r.test(t)&&(s="ts"),{path:d(e,a),namespace:"@erwin-kort/esbuild-plugin#"+s}}),w(i,"js"),w(i,"ts")}},w=(i,r)=>{let a=new RegExp(g+"*$"),t;r=="js"?t=new RegExp(".(m|c)?js$"):t=new RegExp(".(m|c)?(j|t)s$"),i.onLoad({filter:a,namespace:"@erwin-kort/esbuild-plugin#"+r},async({path:e})=>{let{href:l}=R(e),s=[],o=[];l.endsWith("/**/*")?(e=f(l.replace(/\/\*\*\/\*$/,"")),o.push(p(e,t,!0))):l.endsWith("/*")&&(e=f(l.replace(/\/\*$/,"")),o.push(p(e,t)));let n=0,m=await Promise.all(o);for(;n<m.length;)s.push(...m[n++]);return{contents:s.map(c=>`import './${P(e,c).replace(g,"/")}';`).join(""),resolveDir:e,loader:r}})};export{k as plugin};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL2luZGV4LnRzIiwgIi4uL3NyYy91dGlsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgdHlwZSB7IFBsdWdpbiwgUGx1Z2luQnVpbGQgfSBmcm9tICdlc2J1aWxkJ1xuaW1wb3J0IHsgcmVzb2x2ZSwgcmVsYXRpdmUsIHNlcCB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBwYXRoVG9GaWxlVVJMLCBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJ1xuXG5pbXBvcnQgeyBzZWFyY2hGaWxlcyB9IGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGxldCBwbHVnaW46IFBsdWdpbiA9IHtcbiAgbmFtZTogJ0Blcndpbi1rb3J0L2VzYnVpbGQtcGx1Z2luJyxcbiAgc2V0dXA6IGFzeW5jIChidWlsZCkgPT4ge1xuICAgIGxldCB0c1JlZ2V4ID0gLy4obXxjKT90cyQvXG5cbiAgICBidWlsZC5vblJlc29sdmUoe1xuICAgICAgZmlsdGVyOiAvXFwvXFwqJC8sXG4gICAgICBuYW1lc3BhY2U6ICdmaWxlJyxcbiAgICB9LCAoeyBwYXRoLCBpbXBvcnRlciwgcmVzb2x2ZURpciwga2luZCB9KSA9PiB7XG4gICAgICBpZiAoa2luZCAhPSAnaW1wb3J0LXN0YXRlbWVudCcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdnbG9iIGltcG9ydCBvbmx5IHdvcmtzIHdpdGggaW1wb3J0IHN0YXRlbWVudHMnKVxuICAgICAgfVxuXG4gICAgICBsZXQgbG9hZGVyID0gJ2pzJ1xuXG4gICAgICBpZiAodHNSZWdleC50ZXN0KGltcG9ydGVyKSkge1xuICAgICAgICBsb2FkZXIgPSAndHMnXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhdGg6IHJlc29sdmUocmVzb2x2ZURpciwgcGF0aCksXG4gICAgICAgIG5hbWVzcGFjZTogJ0Blcndpbi1rb3J0L2VzYnVpbGQtcGx1Z2luIycgKyBsb2FkZXIsXG4gICAgICB9XG4gICAgfSlcblxuICAgIGFwcGx5T25Mb2FkKGJ1aWxkLCAnanMnKVxuICAgIGFwcGx5T25Mb2FkKGJ1aWxkLCAndHMnKVxuICB9LFxufVxuXG5sZXQgYXBwbHlPbkxvYWQgPSAoYnVpbGQ6IFBsdWdpbkJ1aWxkLCBsb2FkZXI6ICdqcycgfCAndHMnKSA9PiB7XG4gIGxldCBsb2FkRmlsdGVyID0gbmV3IFJlZ0V4cChzZXAgKyAnKiQnKVxuICBsZXQgc2VhcmNoRmlsdGVyOiBSZWdFeHBcblxuICBpZiAobG9hZGVyID09ICdqcycpIHtcbiAgICBzZWFyY2hGaWx0ZXIgPSBuZXcgUmVnRXhwKCcuKG18Yyk/anMkJylcbiAgfSBlbHNlIHtcbiAgICBzZWFyY2hGaWx0ZXIgPSBuZXcgUmVnRXhwKCcuKG18Yyk/KGp8dClzJCcpXG4gIH1cblxuICBidWlsZC5vbkxvYWQoXG4gICAgeyBmaWx0ZXI6IGxvYWRGaWx0ZXIsIG5hbWVzcGFjZTogJ0Blcndpbi1rb3J0L2VzYnVpbGQtcGx1Z2luIycgKyBsb2FkZXIgfSxcbiAgICBhc3luYyAoeyBwYXRoIH0pID0+IHtcbiAgICAgIGxldCB7IGhyZWYgfSA9IHBhdGhUb0ZpbGVVUkwocGF0aClcbiAgICAgIGxldCBmaWxlczogc3RyaW5nW10gPSBbXVxuICAgICAgbGV0IGF3YWl0aW5nOiBQcm9taXNlPHN0cmluZ1tdPltdID0gW11cblxuICAgICAgaWYgKGhyZWYuZW5kc1dpdGgoJy8qKi8qJykpIHtcbiAgICAgICAgcGF0aCA9IGZpbGVVUkxUb1BhdGgoaHJlZi5yZXBsYWNlKC9cXC9cXCpcXCpcXC9cXCokLywgJycpKVxuXG4gICAgICAgIGF3YWl0aW5nLnB1c2goc2VhcmNoRmlsZXMocGF0aCwgc2VhcmNoRmlsdGVyLCB0cnVlKSlcbiAgICAgIH0gZWxzZSBpZiAoaHJlZi5lbmRzV2l0aCgnLyonKSkge1xuICAgICAgICBwYXRoID0gZmlsZVVSTFRvUGF0aChocmVmLnJlcGxhY2UoL1xcL1xcKiQvLCAnJykpXG5cbiAgICAgICAgYXdhaXRpbmcucHVzaChzZWFyY2hGaWxlcyhwYXRoLCBzZWFyY2hGaWx0ZXIpKVxuICAgICAgfVxuXG4gICAgICBsZXQgaSA9IDBcbiAgICAgIGxldCBhd2FpdGVkID0gYXdhaXQgUHJvbWlzZS5hbGwoYXdhaXRpbmcpXG5cbiAgICAgIHdoaWxlIChpIDwgYXdhaXRlZC5sZW5ndGgpIHtcbiAgICAgICAgZmlsZXMucHVzaCguLi5hd2FpdGVkW2krK10pXG4gICAgICB9XG5cbiAgICAgIGxldCBjb250ZW50cyA9IGZpbGVzXG4gICAgICAgIC5tYXAoKF9wYXRoKSA9PiBgaW1wb3J0ICcuLyR7cmVsYXRpdmUocGF0aCwgX3BhdGgpLnJlcGxhY2Uoc2VwLCAnLycpfSc7YClcbiAgICAgICAgLmpvaW4oJycpXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbnRlbnRzLFxuICAgICAgICByZXNvbHZlRGlyOiBwYXRoLFxuICAgICAgICBsb2FkZXIsXG4gICAgICB9XG4gICAgfSxcbiAgKVxufVxuIiwgImltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHsgcmVhZGRpciB9IGZyb20gJ2ZzL3Byb21pc2VzJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoRmlsZXMocGF0aDogc3RyaW5nLCBmaWx0ZXI6IFJlZ0V4cCwgcmVjdXJzaXZlID0gZmFsc2UpIHtcbiAgbGV0IGkgPSAwXG4gIGxldCBmaWxlczogc3RyaW5nW10gPSBbXVxuICBsZXQgZGlyZW50cyA9IGF3YWl0IHJlYWRkaXIocGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gIGxldCBhd2FpdGluZzogUHJvbWlzZTxzdHJpbmdbXT5bXSA9IFtdXG5cbiAgd2hpbGUgKGkgPCBkaXJlbnRzLmxlbmd0aCkge1xuICAgIGxldCBkaXJlbnQgPSBkaXJlbnRzW2krK11cblxuICAgIGlmIChyZWN1cnNpdmUgJiYgZGlyZW50LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgIGF3YWl0aW5nLnB1c2goXG4gICAgICAgIHNlYXJjaEZpbGVzKHJlc29sdmUocGF0aCwgZGlyZW50Lm5hbWUpLCBmaWx0ZXIsIHRydWUpLFxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoZGlyZW50LmlzRmlsZSgpKSB7XG4gICAgICBpZiAoZmlsdGVyLnRlc3QoZGlyZW50Lm5hbWUpKSB7XG4gICAgICAgIGZpbGVzLnB1c2gocmVzb2x2ZShwYXRoLCBkaXJlbnQubmFtZSkpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaSA9IDBcbiAgbGV0IGF3YWl0ZWQgPSBhd2FpdCBQcm9taXNlLmFsbChhd2FpdGluZylcblxuICB3aGlsZSAoaSA8IGF3YWl0ZWQubGVuZ3RoKSB7XG4gICAgZmlsZXMucHVzaCguLi5hd2FpdGVkW2krK10pXG4gIH1cblxuICByZXR1cm4gZmlsZXNcbn1cbiJdLAogICJtYXBwaW5ncyI6ICJBQUNBLHNEQUNBLHVEQ0ZBLCtCQUNBLHNDQUVBLGlCQUFrQyxFQUFjLEVBQWdCLEVBQVksR0FBTyxDQUNqRixHQUFJLEdBQUksRUFDSixFQUFrQixDQUFDLEVBQ25CLEVBQVUsS0FBTSxHQUFRLEVBQU0sQ0FBRSxjQUFlLEVBQUssQ0FBQyxFQUNyRCxFQUFnQyxDQUFDLEVBRXJDLEtBQU8sRUFBSSxFQUFRLFFBQVEsQ0FDekIsR0FBSSxHQUFTLEVBQVEsS0FFckIsQUFBSSxHQUFhLEVBQU8sWUFBWSxFQUNsQyxFQUFTLEtBQ1AsRUFBWSxFQUFRLEVBQU0sRUFBTyxJQUFJLEVBQUcsRUFBUSxFQUFJLENBQ3RELEVBQ1MsRUFBTyxPQUFPLEdBQ25CLEVBQU8sS0FBSyxFQUFPLElBQUksR0FDekIsRUFBTSxLQUFLLEVBQVEsRUFBTSxFQUFPLElBQUksQ0FBQyxDQUczQyxDQUVBLEVBQUksRUFDSixHQUFJLEdBQVUsS0FBTSxTQUFRLElBQUksQ0FBUSxFQUV4QyxLQUFPLEVBQUksRUFBUSxRQUNqQixFQUFNLEtBQUssR0FBRyxFQUFRLElBQUksRUFHNUIsTUFBTyxFQUNULENEekJPLEdBQUksR0FBaUIsQ0FDMUIsS0FBTSw2QkFDTixNQUFPLEtBQU8sSUFBVSxDQUN0QixHQUFJLEdBQVUsYUFFZCxFQUFNLFVBQVUsQ0FDZCxPQUFRLFFBQ1IsVUFBVyxNQUNiLEVBQUcsQ0FBQyxDQUFFLE9BQU0sV0FBVSxhQUFZLFVBQVcsQ0FDM0MsR0FBSSxHQUFRLG1CQUNWLEtBQU0sSUFBSSxPQUFNLCtDQUErQyxFQUdqRSxHQUFJLEdBQVMsS0FFYixNQUFJLEdBQVEsS0FBSyxDQUFRLEdBQ3ZCLEdBQVMsTUFHSixDQUNMLEtBQU0sRUFBUSxFQUFZLENBQUksRUFDOUIsVUFBVyw4QkFBZ0MsQ0FDN0MsQ0FDRixDQUFDLEVBRUQsRUFBWSxFQUFPLElBQUksRUFDdkIsRUFBWSxFQUFPLElBQUksQ0FDekIsQ0FDRixFQUVJLEVBQWMsQ0FBQyxFQUFvQixJQUF3QixDQUM3RCxHQUFJLEdBQWEsR0FBSSxRQUFPLEVBQU0sSUFBSSxFQUNsQyxFQUVKLEFBQUksR0FBVSxLQUNaLEVBQWUsR0FBSSxRQUFPLFlBQVksRUFFdEMsRUFBZSxHQUFJLFFBQU8sZ0JBQWdCLEVBRzVDLEVBQU0sT0FDSixDQUFFLE9BQVEsRUFBWSxVQUFXLDhCQUFnQyxDQUFPLEVBQ3hFLE1BQU8sQ0FBRSxVQUFXLENBQ2xCLEdBQUksQ0FBRSxRQUFTLEVBQWMsQ0FBSSxFQUM3QixFQUFrQixDQUFDLEVBQ25CLEVBQWdDLENBQUMsRUFFckMsQUFBSSxFQUFLLFNBQVMsT0FBTyxFQUN2QixHQUFPLEVBQWMsRUFBSyxRQUFRLGNBQWUsRUFBRSxDQUFDLEVBRXBELEVBQVMsS0FBSyxFQUFZLEVBQU0sRUFBYyxFQUFJLENBQUMsR0FDMUMsRUFBSyxTQUFTLElBQUksR0FDM0IsR0FBTyxFQUFjLEVBQUssUUFBUSxRQUFTLEVBQUUsQ0FBQyxFQUU5QyxFQUFTLEtBQUssRUFBWSxFQUFNLENBQVksQ0FBQyxHQUcvQyxHQUFJLEdBQUksRUFDSixFQUFVLEtBQU0sU0FBUSxJQUFJLENBQVEsRUFFeEMsS0FBTyxFQUFJLEVBQVEsUUFDakIsRUFBTSxLQUFLLEdBQUcsRUFBUSxJQUFJLEVBTzVCLE1BQU8sQ0FDTCxTQUxhLEVBQ1osSUFBSSxBQUFDLEdBQVUsYUFBYSxFQUFTLEVBQU0sQ0FBSyxFQUFFLFFBQVEsRUFBSyxHQUFHLEtBQUssRUFDdkUsS0FBSyxFQUFFLEVBSVIsV0FBWSxFQUNaLFFBQ0YsQ0FDRixDQUNGLENBQ0YiLAogICJuYW1lcyI6IFtdCn0K