// Datafeed implementation
import Datafeed from './Datafeed.js';

document.addEventListener('DOMContentLoaded', () => {
    window.tvWidget = new TradingView.widget({
        symbol: 'Bitfinex:BTC/USD',
        interval: '1D',
        fullscreen: true,
        container: 'tv_chart_container',
        datafeed: Datafeed,
        library_path: '/charting_library/',
    });
});