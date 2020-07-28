package Models

import (
	"github.com/jinzhu/gorm"
	"github.com/yeomko22/groove/api/Network"
)

type Waveform struct {
	gorm.Model
	WaveformTrackId string `gorm:"type:varchar(50);"`
	Waveform        string `gorm:"type:varchar(4096);default:''"`
}

func GetWaveform(waveform *Waveform, trackId string) (err error) {
	err = Network.DB.
		Where("waveform_track_id = ?", trackId).
		Find(&waveform).
		Error
	if err != nil {
		return err
	}
	return nil
}
