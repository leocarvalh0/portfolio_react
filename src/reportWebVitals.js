import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    onCLS(onPerfEntry); // Medindo CLS
    onFID(onPerfEntry); // Medindo FID
    onFCP(onPerfEntry); // Medindo FCP
    onLCP(onPerfEntry); // Medindo LCP
    onTTFB(onPerfEntry); // Medindo TTFB
  }
};

export default reportWebVitals;
