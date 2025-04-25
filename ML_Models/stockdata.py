import yfinance as yf
import numpy as np
import pandas as pd
import datetime as dt
from pandas_datareader import data as pdr

def stock_data(company):

    end = dt.datetime.now()
    start = end -dt.timedelta(days=100000)
    stock_list = [company]
    df = yf.download(stock_list, period='1d', start=start, end=end)

    prices = np.array(df['Close'])
    dates = np.array(df.index)
    prices_list=prices.tolist()
    dates_list=dates.tolist()

    stock_variable_obj=stock_variables(company)

    search_object= {
        "prices":prices_list,
        "dates":dates_list,
        "stock":stock_variable_obj
    }

    return search_object


def stock_variables(company):

    ticker = yf.Ticker(company)
    past_price = ticker.history(period="1y", interval="1d") 

    initial_price = int(past_price['Close'].iloc[0])

    high = float(np.array(past_price['High'].max())) # 52 Week High
    low = float(np.array(past_price['Low'].min())) # 52 Week Low
    prev_close = float(past_price['Close'].iloc[-1]) # Prev Close
    returns = (((prev_close - initial_price)/initial_price) * 100) # 52 Week Returns
    avg_volume = float(np.array(past_price['Volume'].mean())/1000000) # Average Volume #M
    high_prev = float(past_price['High'].iloc[-1])
    low_prev  = float(past_price['Low'].iloc[-1])
    shares_series = ticker.get_shares_full(start="2022-01-01", end=None)
    if shares_series.empty:
        market_cap = 0.0
    else:
        latest_shares = float(shares_series.iloc[-1])
        market_cap = (latest_shares * prev_close) / 1e12
        
    high = float("{:.2f}".format(high))
    low = float("{:.2f}".format(low))
    prev_close = float("{:.2f}".format(prev_close))
    returns = float("{:.2f}".format(returns))
    avg_volume = float("{:.2f}".format(avg_volume))
    high_prev = float("{:.2f}".format(high_prev))
    low_prev = float("{:.2f}".format(low_prev))
    market_cap = float("{:.2f}".format(market_cap))

    variable_object={
        "high" :high ,
        "low" :low ,
        "prev_close" :prev_close ,
        "returns" :returns ,
        "avg_volume" :avg_volume ,
        "high_prev" :high_prev ,
        "low_prev" :low_prev ,
        "market_cap":market_cap
    }

    return variable_object